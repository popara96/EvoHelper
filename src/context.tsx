import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useSettingsContext } from './settingsContext';
import { Class } from './main/load';

/**
 * 
 * @param loadCode The raw TEVE load code saved in wc3 documents.
 * @param chunkSize The max size of an ingame chat message in wc3.
 * @returns An array of strings, each containing a chunk of the load code. Handles load codes no matter the length.
 */
function splitIntoChunks(loadCode: string): string[] {
  const result: string[] = [];
  const chunkSize = 120;
    
  for (let i = 0; i < loadCode.length; i += chunkSize) {
      result.push(loadCode.slice(i, i + chunkSize));
  }
  
  return result;
}

interface CharacterContext {
  allClasses: Class[];
  setAllClasses: (classes: Class[]) => void;
  onLoadClick: (character: Class, legacy?: boolean) => void;
  loadClasses: () => void;
  getCharacterById: (id?: string) => Class | undefined;
}
export const CharacterContext = createContext({} as CharacterContext);
export const CharacterProvider: FC<PropsWithChildren> = ({ children }) => {
  const { wc3path, battleTag, extraLines } = useSettingsContext();
  const [allClasses, setAllClasses] = useState<Class[]>([]);
  const loadClasses = () => {
    window.electron.ipcRenderer.sendMessage(
      'ipc',
      // probably should get rid of contant path parts in 'frontend'
      [
        wc3path,
        'CustomMapData',
        "Twilight's Eve Evo",
        battleTag
      ]
    );
  };
  const getCharacterById = (id?: string) => {
    if (!id) {
      return undefined;
    }
    return allClasses.find((character) => character.hero === id);
  };
  const onLoadClick = (character: Class, legacy?: boolean) => {
    if (character && character.code) {
      const loadCodeChunks = splitIntoChunks(character.code);

      window.electron.ipcRenderer.sendMessage(
        'load',
        [
          '-rp',
          '-lc',
          ...loadCodeChunks,
          '-le',
          ...extraLines.split('\n'),
        ],
        legacy,
      );
    }
  };
  const value = {
    allClasses,
    setAllClasses,
    onLoadClick,
    loadClasses,
    getCharacterById,
  };
  useEffect(() => {
    window.electron.ipcRenderer.on('ipc', (arg: any) => {
      // @ts-ignore
      setAllClasses(arg);
    });
  }, []);

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};
export const useCharacterContext = () => useContext(CharacterContext);
