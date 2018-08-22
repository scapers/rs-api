/* istanbul ignore next */
export class RsConstants {
  readonly PROFILE_ENDPOINT: string =
    'https://apps.runescape.com/runemetrics/profile/profile?activities=20&user=';
  readonly HISCORE_ENDPOINT: string =
    'http://services.runescape.com/m=hiscore/index_lite.ws?player=';
  readonly IRONMAN_HISCORE_ENDPOINT: string =
    'http://services.runescape.com/m=hiscore_ironman/index_lite.ws?player=';
  readonly HARDCORE_HISCORE_ENDPOINT: string =
    'http://services.runescape.com/m=hiscore_hardcore_ironman/index_lite.ws?player=';
  readonly PLAYER_DETAILS_ENDPOINT: string =
    'http://services.runescape.com/m=website-data/playerDetails.ws?names=';
  readonly SKILL_IDS: any[] = [
    { id: 0, name: 'Attack' },
    { id: 1, name: 'Defence' },
    { id: 2, name: 'Strength' },
    { id: 3, name: 'Hitpoints' },
    { id: 4, name: 'Ranged' },
    { id: 5, name: 'Prayer' },
    { id: 6, name: 'Magic' },
    { id: 7, name: 'Cooking' },
    { id: 8, name: 'Woodcutting' },
    { id: 9, name: 'Fletching' },
    { id: 10, name: 'Fishing' },
    { id: 11, name: 'Firemaking' },
    { id: 12, name: 'Crafting' },
    { id: 13, name: 'Smithing' },
    { id: 14, name: 'Mining' },
    { id: 15, name: 'Herblore' },
    { id: 16, name: 'Agility' },
    { id: 17, name: 'Thieving' },
    { id: 18, name: 'Slayer' },
    { id: 19, name: 'Farming' },
    { id: 20, name: 'Runecrafting' },
    { id: 21, name: 'Hunter' },
    { id: 22, name: 'Construction' },
    { id: 23, name: 'Summoning' },
    { id: 24, name: 'Dungeoneering' },
    { id: 25, name: 'Divination' },
    { id: 26, name: 'Invention' }
  ];
  readonly ACTIVITIES: any[] = [
    { index: 52, name: 'easyClueScrolls' },
    { index: 53, name: 'mediumClueScrolls' },
    { index: 54, name: 'hardClueScrolls' },
    { index: 55, name: 'eliteClueScrolls' },
    { index: 56, name: 'masterClueScrolls' }
  ];
}
