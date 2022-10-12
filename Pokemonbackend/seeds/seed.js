/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
 await knex('pokemon').del();

 await knex('pokemon').insert([
{name: 'bulbasaur', height:6.9, weight:0.7, description:'It carries a seed\non its back right\nfrom birth. As it\fgrows older, the\nseed also grows\nlarger.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg', hp:45, atk:49, def:49, satk: 65, sdef: 65, spd: 45, type1: 'grass',move1:'Razor-Wind',move2:'Swords-Dance'},
{name: 'ivysaur', height:1.0, weight:13.0, description:'If the bud on its\nback starts to\nsmell sweet, it\fis evidence that\nthe large flower\nwill soon bloom.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg', hp:60, atk:62, def:63, satk: 80, sdef: 80, spd: 60, type1: 'grass',move1:'Swords-Dance',move2:'Cut'},
{name: 'venusaur', height:2.0, weight:100.0, description:'It is able to con­\nvert sunlight into\nenergy. As a\fresult, it is more\npowerful in the\nsummertime.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg', hp:80, atk:82, def:83, satk: 100, sdef: 100, spd: 80, type1: 'grass',move1:'Swords-Dance',move2:'Cut'},
{name: 'charmander', height:0.6, weight:8.5, description:'The flame on its\ntail indicates\nCHARMANDERs life\fforce. If it is\nhealthy, the flame\nburns brightly.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg', hp:39, atk:52, def:43, satk: 60, sdef: 50, spd: 65, type1: 'fire',move1:'Mega-Punch',move2:'Fire-Punch'},
{name: 'charmeleon', height:1.1, weight:19.0, description:'It has a barbaric\nnature. In battle,\nit whips its\ffiery tail around\nand slashes away\nwith sharp claws.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg', hp:58, atk:64, def:58, satk: 80, sdef: 65, spd: 80, type1: 'fire',move1:'Mega-Punch',move2:'Fire-Punch'},
{name: 'charizard', height:1.7, weight:90.5, description:'Breathing intense,\nhot flames, it can\nmelt almost any­\fthing. Its breath\ninflicts terrible\npain on enemies.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg', hp:78, atk:84, def:78, satk: 109, sdef: 85, spd: 100, type1: 'fire',move1:'Mega-Punch',move2:'Fire-Punch'},
{name: 'squirtle', height:0.5, weight:9.0, description:'The shell, which\nhardens soon after\nit is born, is\fresilient. If you\npoke it, it will\nbounce back out.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg', hp:44, atk:48, def:65, satk: 50, sdef: 64, spd: 43, type1: 'water',move1:'Mega-Punch',move2:'Ice-Punch'},
{name: 'wartortle', height:1.0, weight:22.5, description:'It cleverly con­\ntrols its furry\nears and tail to\fmaintain its\nbalance while\nswimming.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg', hp:59, atk:63, def:80, satk: 65, sdef: 80, spd: 58, type1: 'water',move1:'Mega-Punch',move2:'Ice-Punch'},
{name: 'blastoise', height:1.6, weight:85.5, description:'The rocket cannons\non its shell fire\njets of water\fcapable of punch­\ning holes through\nthick steel.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg', hp:79, atk:83, def:100, satk: 85, sdef: 105, spd: 78, type1: 'water',move1:'Mega-Punch',move2:'Ice-Punch'},
{name: 'caterpie', height:0.3, weight:2.9, description:'For protection, it\nreleases a horri­\nble stench from\fthe antenna on its\nhead to drive away\nenemies.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg', hp:45, atk:30, def:35, satk: 20, sdef: 20, spd: 45, type1: 'bug',move1:'Tackle',move2:'String-Shot'},
{name: 'metapod', height:0.7, weight:9.9, description:'It prepares for\nevolution by har­\ndening its shell\fas much as possi­\nble to protect its\nsoft body.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg', hp:50, atk:20, def:55, satk: 25, sdef: 25, spd: 30, type1: 'bug',move1:'String-Shot',move2:'Harden'},
{name: 'butterfree', height:1.1, weight:32.0, description:'Water-repellent\npowder on its\nwings enables it\fto collect honey,\neven in the heav­\niest of rains.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg', hp:60, atk:45, def:50, satk: 90, sdef: 80, spd: 70, type1: 'bug',move1:'Razor-Wind',move2:'Gust'},
{name: 'weedle', height:0.3, weight:3.2, description:'It attacks using a\ntwo-inch poison\nbarb on its head.\fIt can usually be\nfound under the\nleaves it eats.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg', hp:40, atk:35, def:30, satk: 20, sdef: 20, spd: 50, type1: 'bug',move1:'Poison-Sting',move2:'String-Shot'},
{name: 'kakuna', height:0.6, weight:10.0, description:'From this form,\nit will grow into\nan adult. As its\fbody becomes soft­\ner, the external\nshell hardens.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg', hp:45, atk:25, def:50, satk: 25, sdef: 25, spd: 35, type1: 'bug',move1:'String-Shot',move2:'Harden'},
{name: 'beedrill', height:1.0, weight:29.5, description:'It can take down\nany opponent with\nits powerful poi­\fson stingers. It\nsometimes attacks\nin swarms.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg', hp:65, atk:90, def:40, satk: 45, sdef: 80, spd: 75, type1: 'bug',move1:'Sword-Dance',move2:'Cut'},
{name: 'pidgey', height:0.3, weight:1.8, description:'Common in grassy\nareas and forests,\nit is very docile\fand will chase off\nenemies by flap­\nping up sand.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg', hp:40, atk:45, def:40, satk: 35, sdef: 35, spd: 56, type1: 'normal',move1:'Razor-Wind',move2:'Gust'},
{name: 'pidgeotto', height:1.1, weight:30.0, description:'It immobilizes its\nprey using well-\ndeveloped claws,\fthen carries the\nprey more than 60\nmiles to its nest.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg', hp:63, atk:60, def:55, satk: 50, sdef: 50, spd: 71, type1: 'normal',move1:'Razor-Wind',move2:'Gust'},
{name: 'pidgeot', height:1.5, weight:39.5, description:'It carries a seed\non its back right\nfrom birth. As it\fgrows older, the\nseed also grows\nlarger.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg', hp:83, atk:80, def:75, satk: 70, sdef: 70, spd: 101, type1: 'normal',move1:'Razor-Wind',move2:'Gust'},
{name: 'rattata', height:0.3, weight:3.5, description:'It eats anything.\nWherever food is\navailable, it will\fsettle down and\nproduce offspring\ncontinuously.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg', hp:30, atk:56, def:35, satk: 25, sdef: 35, spd: 72, type1: 'normal',move1:'Cut',move2:'Headbutt'},
{name: 'raticate', height:0.7, weight:18.5, description:'Gnaws on anything\nwith its tough\nfangs. It can even\ftopple concrete\nbuildings by gnaw­\ning on them.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg', hp:55, atk:81, def:60, satk: 50, sdef: 70, spd: 97, type1: 'normal',move1:'Sword-Dance',move2:'Cut'},
{name: 'spearow', height:0.3, weight:2.0, description:'It flaps its short\nwings to flush out\ninsects from tall\fgrass. It then\nplucks them with\nits stubby beak.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg', hp:40, atk:60, def:30, satk: 31, sdef: 31, spd: 70, type1: 'normal',move1:'Razor-Wind',move2:'Whirlwind'},
{name: 'fearow', height:1.2, weight:38.0, description:'It cleverly uses\nits thin, long\nbeak to pluck and\feat small insects\nthat hide under\nthe ground.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/22.svg', hp:65, atk:90, def:65, satk: 61, sdef: 61, spd: 100, type1: 'normal',move1:'Razor-Wind',move2:'Whirlwind'},
{name: 'ekans', height:2.0, weight:6.9, description:'It always hides in\ngrass. When first\nborn, it has no\fpoison, so its\nbite is painful,\nbut harmless.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/23.svg', hp:35, atk:60, def:44, satk: 40, sdef: 54, spd: 55, type1: 'poison',move1:'Bind',move2:'Siam'},
{name: 'arbok', height:3.5, weight:65.0, description:'With a very venge­\nful nature, it\nwont give up the\fchase, no matter\nhow far, once it\ntargets its prey.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg', hp:60, atk:95, def:69, satk: 65, sdef: 79, spd: 80, type1: 'poison',move1:'Bind',move2:'Siam'},
{name: 'pikachu', height:0.4, weight:6.0, description:'It raises its tail\nto check its sur­\nroundings. The\ftail is sometimes\nstruck by light­\nning in this pose.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg', hp:35, atk:55, def:40, satk: 50, sdef: 50, spd: 90, type1: 'electric',move1:'Mega-Punch',move2:'Pay-Day'},
{name: 'raichu', height:0.8, weight:30.0, description:'When its electric­\nity builds, its\nmuscles are stimu­\flated, and it be­\ncomes more aggres­\nsive than usual.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg', hp:60, atk:90, def:55, satk: 90, sdef: 80, spd: 110, type1: 'electric',move1:'Mega-Punch',move2:'Pay-Day'},
{name: 'sandshrew', height:0.6, weight:12.0, description:'Disliking water,\nit lives in deep\nburrows in arid\fareas. It can roll\nitself instantly\ninto a ball.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/27.svg', hp:50, atk:75, def:85, satk: 20, sdef: 30, spd: 40, type1: 'ground',move1:'Scratch',move2:'Swords-Dance'},
{name: 'sandslash', height:1.0, weight:29.5, description:'If it digs at an\nincredible pace,\nit may snap off\fits spikes and\nclaws. They grow\nback in a day.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/28.svg', hp:75, atk:100, def:110, satk: 45, sdef: 55, spd: 65, type1: 'ground',move1:'Scratch',move2:'Swords-Dance'},
{name: 'nidoran', height:0.4, weight:7.0, description:'Although not very\ncombative, it will\ntorment its foes\fwith poison spikes\nif it is threat­\nened in any way.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/29.svg', hp:55, atk:47, def:52, satk: 40, sdef: 40, spd: 41, type1: 'poison',move1:'Scratch',move2:'Cut'},
{name: 'nidorina', height:0.8, weight:20.0, description:'It has a calm and\ncaring nature.\nBecause its horn\fgrows slowly, it\nprefers not to\nfight.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/30.svg', hp:70, atk:62, def:67, satk: 55, sdef: 55, spd: 56, type1: 'poison',move1:'Scratch',move2:'Cut'}
])
 };