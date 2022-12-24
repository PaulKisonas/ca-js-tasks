console.groupCollapsed('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
{
  class Challenge {
    constructor(id, level) {
        this.id = id;
        this.level = level;
    }

    get points() {
        switch (this.level) {
            case 'VE': 
                return 5;
            case 'EA':
                return 10;
            case 'ME':
                return 20;
            case 'HA':
                return 40;
            case 'VH':
                return 80;
            case 'EX':
                return 120;
            default:
                return null;
        }
    }
  }

  class User {
    constructor(name, xp, log) {
        this.name = name;
        this.xp = xp;
        this.log = log;
    }

    newSolvedChallenge(challenge) {
        this.xp += challenge.points;
        this.log.push(challenge.id);
    }
  }

  const user1 = new User("Madam", 0, []);
  const user2 = new User("Steve", 0, []);

  const challenge1 = new Challenge(1, "VE");
  const challenge2 = new Challenge(2, "EA");
  const challenge3 = new Challenge(3, "ME");
  const challenge4 = new Challenge(4, "HA");
  const challenge5 = new Challenge(5, "VH");
  const challenge6 = new Challenge(6, "EX");

  user1.newSolvedChallenge(challenge1);
  user1.newSolvedChallenge(challenge4);
  user1.newSolvedChallenge(challenge6);

  user2.newSolvedChallenge(challenge5);
  user2.newSolvedChallenge(challenge3);
  user2.newSolvedChallenge(challenge2);
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
{
    class Player {
      constructor(a,b,c,d){
        this.name=a
        this.hp=b
        this.maxHp=b
        this.en=c
        this.maxEn=c
        this.armor=d
      }
      
      healthPerc(){
        this.hpPerc=(this.hp/this.maxHp*100).toFixed(2)
        return this.hpPerc+'% health.'
      }
    
      learnSkill(a,b){
        this[a]=(x)=>{
          let en=this.en-b.cost
          if(en>=0){
            this.en=en
            let arm=x.armor-b.penetration
            let dmg=(b.damage*(100-arm)/100).toFixed(2)
            let t=`${this.name} used ${a}, ${b.desc}, against ${x.name}, doing ${dmg} damage! `
            t+=b.heal?`${this.name} healed for ${b.heal} health! `:''
            this.hp=Math.min(this.maxHp,this.hp+b.heal)
            x.hp=Math.max(0,x.hp-dmg)
            t+=x.name+' '+(x.hp?`is at ${x.healthPerc()}`:`died. `)
            return t
          }else{
            return `${this.name} attempted to use ${a}, but didn't have enough energy!`
          }
        }
      }
    }
  }
  console.groupEnd();