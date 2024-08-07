import { EvoItem } from '../item';
import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';

export const aghanimItems: { [id: string]: EvoItem } = {
  'Ancient Omen': {
    id: 'Ancient Omen',
    restriction: EvoItemRestictions.INQUISITOR,
    rarity: EvoRarity.MYTHIC,
    icon: 'AncientOmen',
    description: 'Forged using the remains of the Ancient One, its protective energies radiate from the wielder, fortifying their willpower.',
    effects: [
      '+250 Armor',
      '+7500 Mana',
      '+20% Cooldown Reduction',
      'Passive: Provide 50 Armor to all allies and 20% Damage to all allies within 1,000 AOE.'
    ],
    crafting: [
      'Rising Ash',
      'Nature Fragment',
      'Ruby',
      'Dragon Egg',
      'Dragon Stone',
      'Angelic Hope'
    ],
    source: 'Agahnim',
  },
  'Calamity': {
    id: 'Calamity',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.MYTHIC,
    icon: 'Calamity',
    description: 'A precisely-made bow, crafted by the finest bowyers of the First Kingdom for the very best marksmen during their first onslaught.',
    effects: [
      '+1500 Agility',
      '+25% Attack Speed',
      'Passive: Every basic attacks increase AS by 1% for 5 seconds(Max: 15%). Gains 15% Attack at max stack.'
    ],
    crafting: [
      'Windspeaker',
      'Nature Fragment',
      'Dragon Tooth',
      'Dragon Stone',
      'Fire Stone',
      'Angelic Hope'
    ],
    source: 'Agahnim',
  },
  'Celestial Wand': {
    id: 'Celestial Wand',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.MYTHIC,
    icon: 'CelestialWand',
    description: 'Found in the Fairy Forest, this staff preserves the energies of fairies that protect their homeland. The staff is believed to grant unparalleled preservation energies and allows the channeling of efficient magic.',
    effects: [
      '+1300 Intelligence',
      '+5000 Mana',
      '+15% Cooldown Reduction',
      '+20% Mana efficiency',
    ],
    crafting: [
      'Eclair La Demes',
      'Ocean Fragment',
      'Sapphire',
      'Dragon Stone',
      'Fire Stone',
      'Angelic Hope',
    ],
    source: 'Agahnim',
  },
  'Holy Bible': {
    id: 'Holy Bible',
    restriction: EvoItemRestictions.DRUID,
    rarity: EvoRarity.MYTHIC,
    icon: 'HolyBible',
    description: 'Contains the new testament written by the Messiah. It is said that chanting the right words allows you to summon the chosen one.',
    effects: [
      '+650 All stats',
      '+15% Cooldown speed',
      'Active: Summons an Angel for 50s. Cooldown 60s.'
    ],
    crafting: [
      'Ancient Dragon Book',
      'Golden Fragment',
      'Blessing of Dragon',
      'Dragon Egg',
      'Fire Stone',
      'Angelic Hope',
    ],
    source: 'Agahnim',
  },
  "Seraph's Embrace": {
    id: "Seraph's Embrace",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.MYTHIC,
    icon: 'SeraphsEmbrace',
    description: '',
    effects: [
      '+1200 Intelligence',
      '+120 Mana Regeneration',
      '0.5% Max Mana regen per second',
      '+15% Cooldown Reduction',
      'Passive: Restore 20% Max MP over 5 seconds when MP reaches below 20%. Cooldown 40s.'
    ],
    crafting: [
      'Winter\'s Soul',
      'Golden Fragment',
      'Sphere of Doom',
      'Dragon Stone',
      'Fire Stone',
      'Angelic Hope',
    ],
    source: 'Agahnim',
  },
  'Holy Grimoire': {
    id: 'Holy Grimoire',
    restriction: EvoItemRestictions.AC_CA,
    rarity: EvoRarity.MYTHIC,
    icon: 'HolyGrimore',
    description: 'Contains sacred scriptures written by Archangel Gabriel. Its contents are yet to be translated, but it is to be believed that those who seek the power to help the weak are blessed with his blessing.',
    effects: [
      '+1050 Intelligence',
      '+5000 Mana',
      '+15% Cooldown Reduction',
      '+10% Heal Power',
      'Active: Heals the target\'s HP for [12,000\xa0+\xa060% Int\xa0+\xa030%\xa0Missing\xa0HP] and 500 Armor for 2.5 seconds. Cooldown 30s.'
    ],
    crafting: [
      'Book of Hylia',
      'Golden Fragment',
      'Blessing of Dragon',
      'Dragon Stone',
      'Fire Stone',
      'Angelic Hope',
    ],
    source: 'Agahnim',
  },
  'Sacred Grimoire': {
    id: 'Sacred Grimoire',
    restriction: EvoItemRestictions.AC_CA,
    rarity: EvoRarity.MYTHIC,
    icon: 'HolyGrimore',
    description: 'Contains sacred scriptures written by Archangel Gabriel. Its contents are yet to be translated, but it is to be believed that those who seek the power to help the weak are blessed with his blessing.',
    effects: [
      '+1050 Intelligence',
      '+5000 Mana',
      '+15% Cooldown Reduction',
      '+10% Heal Power',
      'Active: Heals the target\'s HP for [12,000\xa0+\xa060% Int\xa0+\xa030%\xa0Missing\xa0HP] and 500 Armor for 2.5 seconds. Cooldown 30s.'
    ],
    crafting: [
      'Book of Hylia',
      'Golden Fragment',
      'Blessing of Dragon',
      'Dragon Stone',
      'Fire Stone',
      'Angelic Hope',
    ],
    source: 'Agahnim',
  },

  'Hyrulean Tome of Wisdom': {
    id: 'Hyrulean Tome of Wisdom',
    restriction: EvoItemRestictions.HIGH_TEMPLAR,
    rarity: EvoRarity.MYTHIC,
    icon: 'LinkToThePast',
    description: 'The Seven Sages have immortalized the prophecy of a hero that travels back to the past to save the Kingdom of Hyrule from ruins.',
    effects: [
      '+1600 Intelligence',
      '+15% Cooldown Reduction',
      'Active: Reset all basic abilities\' cooldown. Cooldown 30s.',
    ],
    crafting: [
      'Legend of Freya',
      'Diamond',
      'Mantle of Darkness',
      'Dragon Stone',
      'Fire Stone',
      'Angelic Hope',
    ],
    source: 'Agahnim',
  },
  'Prismatic Barrier': {
    id: 'Prismatic Barrier',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.MYTHIC,
    icon: 'PrismaticBarrier',
    description: 'The angels were able to store all elemental powers in an angelic prism. Once fused, the bearer grants immortality.',
    effects: [
      '+100 Armor',
      '+600 All stats',
      'Active: Toggles between "all attacks" or "boss-only attacks" for passive to proc.',
      'Passive: Negate one instance of Physical Damage and grants 1,600 Armor for 2.5 seconds. Cooldown 20s.'
    ],
    crafting: [
      'Storm Sanctuary',
      'Diamond',
      'Dragon Stone',
      'Fire Stone',
      'Harbinger\'s Heart',
      'Angelic Hope',
    ],
    source: 'Agahnim',
  },
  'Sovereign Sword': {
    id: 'Sovereign Sword',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.MYTHIC,
    icon: 'SovereignSword',
    description: 'The sword of the Almighty Ruler of the First Kingdom. Blessed by the angels, this sword wields divine power, the ability to take the sould of its victim as betrayal of the angel\'s orders.',
    effects: [
      '+6000 Damage',
      '+11 000 Health',
      'Active: Steals 2% Max HP(45% Max Heal) of target and slows AS and MS by 70% for 3 seconds. Cooldown 40s.',
      'Passive: Slows the target by 15%.'
    ],
    crafting: [
      'Cryocell',
      'Diamond',
      'Sphere of Doom',
      'Dragon Stone',
      'Fire Stone',
      'Angelic Hope'
    ],
    source: 'Agahnim',
  },
  'The Vanquisher': {
    id: 'The Vanquisher',
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.MYTHIC,
    icon: 'Vanquisher',
    description: "A sword that resonates with the echoes of countless victories. Its blade, gleaming with an ethereal light, tells the tale of adversaries laid low and challenges overcome. The hilt, adorned with symbols of valor, serves as a constant reminder of the indomitable spirit of those who wield it. As a weapon steeped in the legacy of champions, it is a testament to the unwavering resolve of those who dare to face adversity and emerge victorious.",
    effects: [
      '+1500 Agility',
      '+15% Cooldown Speed',
      'Passive: Spellcasts increase next 3 basic attacks to deal 160% damage.'
    ],
    crafting: [
      'Sword of the Occult',
      'Mythical Weapon Piece',
      'Dragon Stone',
      'Fire Rising',
      'Fire Stone',
      'Angelic Hope'
    ],
    source: 'Agahnim',
  },
  'Valhalla': {
    id: 'Valhalla',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.MYTHIC,
    icon: 'Valhalla',
    description: 'Forged in the divine fires of the mythical Valkyr Smithy, the Valhalla Blade is said to be a gift from the gods themselves to the champions destined for the grand feasts of Valhalla.',
    effects: [
      '+8000 Damage',
      'Passive: Gains 100% Bonus Damage and 25% Bonus AS for 3 seconds after attacking enemy with below 30% HP'
    ],
    crafting: [
      'Blade of Despair',
      'Mythical Weapon Piece',
      'Mythical Handle Piece',
      'Dragon Stone',
      'Fire Stone',
      'Angelic Hope'
    ],
    source: 'Agahnim',
  },
  'Oracle': {
    id: 'Oracle',
    restriction: EvoItemRestictions.AC_CA_FA,
    rarity: EvoRarity.MYTHIC,
    icon: 'Oracle',
    description: 'Crafted by the enigmatic healers of the Sanctuary of Renewal, Oracle\'s Embrace is a testament to their unwavering commitment to healing arts. The cloak draws upon the primal energies of life, offering a haven for those who seek refuge and recovery.',
    effects: [
      '+1200 Intelligence',
      '+160 Mana Regeneration',
      '+15% Cooldown Speed',
      'Active: Grants 30% Heal Power for 10 seconds. Cooldown 25s.'
    ],
    crafting: [
      'Flask of the Oasis',
      'Nature Fragment',
      'Mythical Armor Piece',
      'Blessing of Dragon',
      'Fire Stone',
      'Angelic Hope'
    ],
    source: 'Agahnim',
  },
}