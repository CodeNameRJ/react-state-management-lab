import { useState } from 'react';
import './App.css';


const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [errorMessage, setErrorMessage] = useState('');
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
      },
    ]

  )

  const totalStrength = team.reduce((sum, member) => sum + member.strength, 0);
  const totalAgility = team.reduce((sum, member) => sum + member.agility, 0);



  // console.log("Rendering Component...");
  // console.log("Current Team:", team);
  // console.log("Available Money:", money);


  const handleAddFighter = (fighter) => {
    console.log(`Attempting to add: ${fighter.name}`)

    if (money < fighter.price) {
      setErrorMessage("Not enough money to buy this fighter");
      return;
    }

    setErrorMessage('')

    setTeam((prevTeam) => {
      const updatedTeam = [...prevTeam, fighter];
      console.log("updated team", updatedTeam);
      return updatedTeam;


    })

    setZombieFighters((prevFighters) => {
      const updatedFighters = prevFighters.filter((f) => f.id !== fighter.id);
      console.log("Updated Zombie Fighters List:", updatedFighters);
      return updatedFighters;
    })

    setMoney((prevMoney) => {
      const updatedMoney = prevMoney - fighter.price;
      console.log(`New Money Balance: ${updatedMoney}`);
      return updatedMoney;
    })


  }



  // remove Fighter
  const handleRemoveFighter = (fighter) => {
    console.log(`Attempting to remove ${fighter.name}`);

    setTeam((prevTeam) => {
      const updatedTeam = prevTeam.filter((f) => f.id !== fighter.id);
      console.log('updated team after removal:', updatedTeam);
      return updatedTeam
    })

    setZombieFighters((prevFighters) => {
      const updatedFighters = [...prevFighters, fighter];
      console.log("Updated Zombie Fighters List:", updatedFighters);
      return updatedFighters;
    });

    setMoney((prevMoney) => {
      const updatedMoney = prevMoney + fighter.price;
      console.log(`New Money Balance after refund: ${updatedMoney}`);
      return updatedMoney;
    });
  };







  return (
    <>

    <div className='zombie-fighters-section'>
      <h1>Zombie Apocalypse Team Builder</h1>
      <h2>Money: {money}</h2>

      {/*Zombie Fighters List */}
      <h2>Avaliable Fighters</h2>

      <ul>
        {zombieFighters.map((fighter) => (
          <li key={fighter.id}>
            <img src={fighter.img} alt={fighter.img} />
            <h3>{fighter.name}</h3>
            <p>Price: {fighter.price}</p>
            <p>Strength {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>

            <button onClick={() => handleAddFighter(fighter)}>Add to Team
            </button>
          </li>
        ))}
      </ul>
    </div>

      {/* Team Membeers */}
      {/* <h2>Team Members</h2> */}
      {/* {console.log("Rendering Team:", team)} */}


      <div className='team-members-section'>
        <h2>Your Team</h2>
        {team.length === 0 ? (
          <p><b>Pick some team members!</b></p>
          ) :(
          <ul>
            {team.map((member) => (
            <li key={member.id}>
              <img src={member.img} alt={member.img} />
              <h3>{member.name}</h3>
              <p>Price: {member.price}</p>
              <p>Strength {member.strength}</p>
              <p>Agility: {member.agility}</p>

              <button onClick={() => handleRemoveFighter(member)}>Remove</button>
             </li>
            ))}
          </ul>
        )}
      </div>



      {/* Display total stats */}

      <div>
        <h2>Team Stats</h2>
        <p><strong>Total Strength:</strong> {totalStrength}</p>
        <p><strong>Total Agility:</strong> {totalAgility}</p>
      </div>

      <div className="error-message">
        {errorMessage && <p>{errorMessage}</p>}
      </div>




    </>


  )

}

export default App
