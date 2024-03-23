
// document.getElementById('search_test').innerHTML = "Hello"+prompt("what is your name: ");

const search_bar = document.getElementById('search');
addEventListener('keydown', write_text);

let listCSV = `
1,Enter: Naruto Uzumaki!,MANGA CANON
,2,My Name is Konohamaru!,MANGA CANON
,3,Sasuke and Sakura: Friends or Foes?,MANGA CANON
,4,Pass or Fail: Survival Test,MANGA CANON
,5,You Failed! Kakashi's Final Decision,MANGA CANON
,6,A Dangerous Mission! Journey to the Land of Waves!,MANGA CANON
,7,The Assassin of the Mist!,MIXED CANON/FILLER
,8,The Oath of Pain,MANGA CANON
,9,Kakashi: Sharingan Warrior,MIXED CANON/FILLER
,10,The Forest of Chakra,MANGA CANON
,11,The Land Where a Hero Once Lived,MANGA CANON
,12,Battle on the Bridge! Zabuza Returns!!,MANGA CANON
,13,Haku's Secret Jutsu: Crystal Ice Mirrors,MANGA CANON
,14,"The Number One Hyperactive Knucklehead Ninja Joins the Fight!!",MIXED CANON/FILLER
,15,Zero Visibility: The Sharingan Shatters,MIXED CANON/FILLER
,16,The Broken Seal,MIXED CANON/FILLER
,17,White Past: Hidden Ambition,MANGA CANON
,18,The Weapons Known as Shinobi,MIXED CANON/FILLER
,19,The Demon in the Snow,MIXED CANON/FILLER
,20,A New Chapter Begins: The Chunin Exam!,MIXED CANON/FILLER
,21,Identify Yourself: Powerful New Rivals,MIXED CANON/FILLER
,22,Chunin Challenge: Rock Lee vs. Sasuke!,MANGA CANON
,23,Genin Takedown! All Nine Rookies Face Off!,MIXED CANON/FILLER
,24,Start Your Engines: The Chunin Exam Begins!,MIXED CANON/FILLER
,25,The Tenth Question: All or Nothing!,MANGA CANON
,26,Special Report: Live from the Forest of Death!,FILLER
,27,The Chunin Exam Stage 2: The Forest of Death,MIXED CANON/FILLER
,28,Eat or be Eaten: Panic in the Forest,MIXED CANON/FILLER
,29,Naruto's Counterattack: Never Give In!,MIXED CANON/FILLER
,30,The Sharingan Revived: Dragon-Flame Jutsu!,MIXED CANON/FILLER
,31,Bushy Brow's Pledge: Undying Love and Protection!,MANGA CANON
,32,Sakura Blossoms!,MANGA CANON
,33,Battle Formation: Ino-Shika-Cho!,MANGA CANON
,34,Akamaru Trembles: Gaara's Cruel Strength!,MANGA CANON
,35,The Scroll's Secret: No Peeking Allowed,MANGA CANON
,36,Clone vs. Clone: Mine are Better than Yours!,MANGA CANON
,37,Surviving the Cut! The Rookie Nine Together Again!,MIXED CANON/FILLER
,38,Narrowing the Field: Sudden Death Elimination!,MIXED CANON/FILLER
,39,Bushy Brow's Jealousy: Lions Barrage Unleashed!,MIXED CANON/FILLER
,40,Kakashi and Orochimaru: Face-to-Face!,MIXED CANON/FILLER
,41,Kunoichi Rumble: The Rivals Get Serious!,MIXED CANON/FILLER
,42,The Ultimate Battle: Cha!,MANGA CANON
,43,Killer Kunoichi and a Shaky Shikamaru,MIXED CANON/FILLER
,44,Akamaru Unleashed! Who's Top Dog Now?,MIXED CANON/FILLER
,45,Surprise Attack! Naruto's Secret Weapon!,MIXED CANON/FILLER
,46,Byakugan Battle: Hinata Grows Bold!,MIXED CANON/FILLER
,47,A Failure Stands Tall!,MIXED CANON/FILLER
,48,Gaara vs. Rock Lee: The Power of Youth Explodes!,MANGA CANON
,49,Lee's Hidden Strength: Forbidden Secret Jutsu!,MIXED CANON/FILLER
,50,The Fifth Gate: A Splendid Ninja is Born,MANGA CANON
,51,A Shadow in Darkness: Danger Approaches Sasuke,MANGA CANON
,52,Ebisu Returns: Naruto's Toughest Training Yet!,MIXED CANON/FILLER
,53,Long Time No See: Jiraiya Returns!,MIXED CANON/FILLER
,54,The Summoning Jutsu: Wisdom of the Toad Sage!,MIXED CANON/FILLER
,55,"A Feeling of Yearning; A Flower Full of Hope",MIXED CANON/FILLER
,56,Live or Die: Risk it All to Win it All!,MIXED CANON/FILLER
,57,He Flies! He Jumps! He Lurks! Chief Toad Appears!,MIXED CANON/FILLER
,58,Hospital Besieged: The Evil Hand Revealed!,MIXED CANON/FILLER
,59,The Final Rounds: Rush to the Battle Arena!,MIXED CANON/FILLER
,60,Byakugan vs. Shadow Clone,MIXED CANON/FILLER
,61,Ultimate Defense: Zero Blind Spot!,MANGA CANON
,62,A Failure's True Power,MANGA CANON
,63,Hit it or Quit it: The Final Rounds Get Complicated!,MIXED CANON/FILLER
,64,Zero Motivation: The Guy with Cloud Envy!,MANGA CANON
,65,"Dancing Leaf Squirming Sand",MANGA CANON
,66,Bushy Brow's Jutsu: Sasuke Style!,MIXED CANON/FILLER
,67,"Late for the Show But Ready to Go! The Ultimate Secret Technique is Born!",MANGA CANON
,68,Zero Hour! The Destruction of the Hidden Leaf Village Begins!,MANGA CANON
,69,Village in Distress: A New A-Ranked Mission!,MIXED CANON/FILLER
,70,A Shirker's Call to Action: A Layabout No More!,MIXED CANON/FILLER
,71,An Unrivaled Match: Hokage Battle Royale!,MIXED CANON/FILLER
,72,A Mistake from the Past: A Face Revealed!,MIXED CANON/FILLER
,73,Forbidden Secret Technique: Reaper Death Seal!,MANGA CANON
,74,Astonishing Truth! Gaara's Identity Emerges!,MIXED CANON/FILLER
,75,Sasuke's Decision: Pushed to the Edge!,MANGA CANON
,76,Assassin of the Moonlit Night,MANGA CANON
,77,Light vs. Dark: The Two Faces of Gaara,MANGA CANON
,78,Naruto's Ninja Handbook,MANGA CANON
,79,Beyond the Limit of Darkness and Light,MANGA CANON
,80,"The Third Hokage Forever...",MANGA CANON
,81,Return of the Morning Mist,MANGA CANON
,82,Eye to Eye: Sharingan vs. Sharingan!,MANGA CANON
,83,Jiraiya: Naruto's Potential Disaster!,MIXED CANON/FILLER
,84,"Roar Chidori! Brother vs. Brother!",MANGA CANON
,85,Hate Among the Uchihas: The Last of the Clan!,MANGA CANON
,86,A New Training Begins: I Will Be Strong!,MANGA CANON
,87,Keep on Training: Pop Goes the Water Balloon!,MANGA CANON
,88,Focal Point: The Mark of the Leaf,MANGA CANON
,89,An Impossible Choice: The Pain Within Tsunade's Heart,MANGA CANON
,90,Unforgivable! A Total Lack of Respect!,MANGA CANON
,91,Inheritence! The Necklace of Death!,MANGA CANON
,92,A Dubious Offer! Tsunade's Choice!,MANGA CANON
,93,Breakdown! The Deal is Off!,MANGA CANON
,94,Attack! Fury of the Rasengan!,MANGA CANON
,95,The Fifth Hokage! A Life on the Line!,MANGA CANON
,96,Deadlock! Sannin Showdown!,MANGA CANON
,97,Kidnapped! Naruto's Hot Spring Adventure!,FILLER
,98,Tsunade's Warning: Ninja No More!,MIXED CANON/FILLER
,99,The Will of Fire Still Burns!,MIXED CANON/FILLER
,100,Sensei and Student: The Bond of the Shinobi,MIXED CANON/FILLER
,101,Gotta See! Gotta Know! Kakashi-Sensei's True Face!,FILLER
,102,Mission: Help an Old Friend in the Land of Tea,FILLER
,103,The Race is on! Trouble on the High Seas!,FILLER
,104,Run Idate Run! Nagi Island Awaits!,FILLER
,105,A Fierce Battle of Rolling Thunder!,FILLER
,106,The Last Leg: A Final Act of Desperation,FILLER
,107,The Battle Begins: Naruto vs. Sasuke,MANGA CANON
,108,Bitter Rivals and Broken Bonds,MANGA CANON
,109,An Invitation from the Sound,MANGA CANON
,110,Formation! The Sasuke Retrieval Squad,MANGA CANON
,111,Sound vs. Leaf,MANGA CANON
,112,Squad Mutiny: Everything Falls Apart!,MIXED CANON/FILLER
,113,"Full Throttle Power! Choji Ablaze!",MIXED CANON/FILLER
,114,Good-bye Old Friend...! I'll Always Believe in You!,MIXED CANON/FILLER
,115,Your Opponent Is Me!,MANGA CANON
,116,360 Degrees of Vision: The Byakugan's Blind Spot,MANGA CANON
,117,Losing is Not an Option!,MANGA CANON
,118,The Vessel Arrives Too Late,MANGA CANON
,119,Miscalculation: A New Enemy Appears!,MANGA CANON
,120,Roar and Howl! The Ultimate Tag Team,MANGA CANON
,121,To Each His Own Battle,MANGA CANON
,122,Fakeout: Shikamaru's Comeback!,MANGA CANON
,123,The Leaf's Handsome Devil!,MANGA CANON
,124,The Beast Within,MANGA CANON
,125,The Sand Shinobi: Allies of the Leaf,MANGA CANON
,126,Showdown: Gaara vs. Kimimaro!,MIXED CANON/FILLER
,127,Vengeful Strike! The Bracken Dance,MIXED CANON/FILLER
,128,A Cry on Deaf Ears,MANGA CANON
,129,Brothers: Distance Among the Uchiha,MANGA CANON
,130,"Father and Son. the Broken Crest",MIXED CANON/FILLER
,131,The Secrets of the Mangekyo Sharingan!,MIXED CANON/FILLER
,132,For a Friend,MANGA CANON
,133,A Plea From a Friend,MANGA CANON
,134,The End of Tears,MANGA CANON
,135,The Promise That Could Not Be Kept,MANGA CANON
,136,Deep Cover!? A Super S-Ranked Mission!,FILLER
,137,"A Town of Outlaws; the Shadow of the Fuma Clan",FILLER
,138,"Pure Betrayal; and a Fleeting Plea!",FILLER
,139,Pure Terror! The House of Orochimaru,FILLER
,140,Two Heartbeats: Kabuto's Trap,FILLER
,141,Sakura's Determination,MIXED CANON/FILLER
,142,The Three Villains from the Maximum Security Prison,MIXED CANON/FILLER
,143,Tonton! I'm Counting on You!,FILLER
,144,A New Squad! Two People and a Dog?!,FILLER
,145,A New Formation: Ino-Shika-Cho!,FILLER
,146,Orochimaru's Shadow,FILLER
,147,A Clash of Fate: You Can't Bring Me Down,FILLER
,148,Search for the Rare Bikochu Beetle,FILLER
,149,What's the Difference? Don't All Insects Look Alike?,FILLER
,150,A Battle of Bugs: The Deceivers and the Deceived,FILLER
,151,Blaze Away Byakugan: This Is My Ninja Way,FILLER
,152,Funeral March for the Living,FILLER
,153,A Lesson Learned: The Iron Fist of Love,FILLER
,154,The Enemy of the Byakugan,FILLER
,155,The Dark Creeping Clouds,FILLER
,156,Raiga's Counterattack,FILLER
,157,Run! The Curry of Life,FILLER
,158,Follow My Lead! The Great Survival Challenge,FILLER
,159,Bounty Hunter from the Wilderness,FILLER
,160,Hunt or Be Hunted?! Showdown at the O.K. Temple!,FILLER
,161,The Appearance of Strange Visitors,FILLER
,162,The Cursed Warrior,FILLER
,163,The Tactician's Intent,FILLER
,164,Too Late for Help,FILLER
,165,The Death of Naruto,FILLER
,166,When Time Stands Still,FILLER
,167,When Egrets Flap Their Wings,FILLER
,168,"Mix It Stretch It Boil It Up! Burn Copper Pot Burn!",FILLER
,169,Remembrance: The Lost Page,FILLER
,170,The Closed Door,FILLER
,171,Infiltration: The Set-Up!,FILLER
,172,Despair: A Fractured Heart,FILLER
,173,The Battle at Sea: The Power Unleashed!,FILLER
,174,Impossible! Celebrity Ninja Art - Money Style Jutsu!,FILLER
,175,The Treasure Hunt is On!,FILLER
,176,"Run Dodge Zigzag! Chase or Be Chased!",FILLER
,177,"Please Mr. Postman!",FILLER
,178,Encounter! The Boy with a Star's Name,FILLER
,179,The Remembered Lullaby,FILLER
,180,Hidden Jutsu: The Price of The Ninja Art: Kujaku,FILLER
,181,"Hoshikage; The Buried Truth",FILLER
,182,"Reunion. The Remaining time",FILLER
,183,The Star's Radiance,FILLER
,184,Kiba's Long Day!,FILLER
,185,A Legend from the Hidden Leaf: The Onbaa!,FILLER
,186,Laughing Shino,FILLER
,187,Open for Business! The Leaf Moving Service,FILLER
,188,Mystery of the Targeted Merchants,FILLER
,189,A Limitless Supply of Ninja Tools,FILLER
,190,The Byakugan Sees the Blind Spot,FILLER
,191,Forecast: Death! Cloudy with Chance of Sun,FILLER
,192,Ino Screams! Chubby Paradise!,FILLER
,193,Viva Dojo Challenge! Youth Is All About Passion!,FILLER
,194,The Mysterious Curse of the Haunted Castle,FILLER
,195,The Third Super-Beast!,FILLER
,196,Hot-Blooded Confrontation: Student vs. Sensei,FILLER
,197,Crisis! The Hidden Leaf 11 Gather!,FILLER
,198,The ANBU Gives Up? Naruto's Recollection,FILLER
,199,The Missed Target,FILLER
,200,The Powerful Helper,FILLER
,201,Multiple Traps! Countdown to Destruction,FILLER
,202,The Top 5 Ninja Battles,FILLER
,203,"Kurenai's Decision Squad 8 Left Behind",FILLER
,204,Yakumo's Sealed Ability,FILLER
,205,Kurenai's Top-Secret Mission: The Promise With the Third Hokage,FILLER
,206,Genjutsu or Reality?,FILLER
,207,The Supposed Sealed Ability,FILLER
,208,The Weight of the Prized Artifact!,FILLER
,209,The Enemy: Ninja Dropouts,FILLER
,210,The Bewildering Forest,FILLER
,211,Memory of Flames,FILLER
,212,To Each His Own Path,FILLER
,213,Vanished Memories,FILLER
,214,Bringing Back Reality,FILLER
,215,A Past to Be Erased,FILLER
,216,The Targeted Shukaku,FILLER
,217,Sand Alliance with the Leaf Shinobi,FILLER
,218,The Counterattack!,FILLER
,219,The Ultimate Weapon Reborn,FILLER
,220,Departure,MIXED CANON/FILLER
`
console.log(listCSV[4])
function write_text() {
  if (search_bar.value != ''){
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
      document.getElementById('search_history').innerHTML += search_bar.value + "<br>";
      search_bar.value = null;
      }
      // document.getElementById('search_history').innerHTML = '';
    }
    return search_bar.value;
  }

function parseCSV(string) {
  let arr = string.split(",");
  console.log(arr);
  return arr
}




function populateGrid(arr) {
  // console.log(arr.length)
  console.log(arr[2])
  var string = `
  <p class="main-grid-header">Episode#</p>
  <p class="main-grid-header">Episode Name</p>
  <p class="main-grid-header">Canon/Filler</p>`;
  for (var i=0; i<arr.length; i++) {
    string+='<p class="main-grid-item">'+arr[i]+'</p>';
  }
  console.log(string)
  document.getElementById('mainGrid').innerHTML = string;
}
populateGrid(parseCSV(listCSV));
let test_bool = true;
let test_num = 25;
let test_array = ["hello", true, 45, "test"];


test_array.push(test_bool)

console.log(test_array)

