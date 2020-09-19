import stringHash from 'string-hash';
import list from '@/data/players.json';

const getKeyForPlayer = (p) => stringHash(p.name + p.teams.concat());
const indexOfPlayers = {};
list.forEach((p) => { indexOfPlayers[getKeyForPlayer(p)] = p; });

const getRandomPlayerId = () => {
  const index = Math.floor(Math.random() * list.length);
  return getKeyForPlayer(list[index]);
};

const checkPlayerId = (player, id) => `${getKeyForPlayer(player)}` === `${id}`;
const getPlayerTeams = (playerId) => indexOfPlayers[playerId].teams;

export default {
  list, getRandomPlayerId, getPlayerTeams, checkPlayerId,
};
