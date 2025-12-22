import React from 'react'
import sonu from '../../assets/simg.png'
import CrewCard from './CrewCard'

const Crew = () => {

    const imgLinks = [
        "https://i.pinimg.com/736x/b8/c0/3d/b8c03d374f0023b784f753cdd7e2f14b.jpg", //luffy
        "https://i.pinimg.com/1200x/d3/d6/00/d3d600bb81b235b5ba795a134dd2509c.jpg",//ussop
        "https://i.pinimg.com/1200x/cb/8a/23/cb8a23119ee6a5a948353d5f1a282789.jpg", //nami
        "https://i.pinimg.com/1200x/48/31/ed/4831ede340d0ecb1bd68821080974b07.jpg", //sanji
        "https://i.pinimg.com/736x/3e/7b/ab/3e7bab50f225f4106b9c85da7405823f.jpg", //chopper



    ]

  return (
    <section id='crews' className='pt-5'>

        <h1 className='text-white text-5xl mb-5'>My Crew Members    </h1>


        <div id='crew-cards-container ' className='flex flex-col gap-6'>

       

                {/* luffy card  */}
                <CrewCard
                crewName='LUFFY:THE CAPTAIN'
                crewDetail='Oi! I’m Monkey D. Luffy 🏴‍☠️ I’m gonna be the King of the Pirates! I lover eating Niku.'
                skillName= "Devil fruit :Hito Hito no Mi, Model: Nika"
                skillDetail="A mythical Zoan Devil Fruit that gives me a rubber-like body and the power of the God."
                imgLink="https://i.pinimg.com/736x/b8/c0/3d/b8c03d374f0023b784f753cdd7e2f14b.jpg"
                flexRev = "flex-row-reverse"
                />

                {/* ussop card  */}
                <CrewCard
               crewName="SOGEKING : THE SNIPER"
                crewDetail="I’m Usopp! A brave warrior of the sea… someday! I never give up on my friends."
                skillName="Skill : Sniping & Gadgets"
                skillDetail="Expert sniper using creative weapons, tricks, and plant-based attacks."
                imgLink="https://i.pinimg.com/1200x/d3/d6/00/d3d600bb81b235b5ba795a134dd2509c.jpg"
              
                />
                {/* nami card  */}
                <CrewCard
               crewName="NAMI : THE NAVIGATOR"
                crewDetail="I’m Nami. I draw maps of the world and love treasure more than anything and gold is my babe."
                skillName="Skill : Weather Control"
                skillDetail="Uses the Clima-Tact to control weather and strike enemies with lightning."
                imgLink="https://i.pinimg.com/1200x/cb/8a/23/cb8a23119ee6a5a948353d5f1a282789.jpg"
                flexRev="flex-row-reverse"
              
                />
                {/* Sanji card  */}
                <CrewCard
               crewName="SANJI : THE COOK"
                crewDetail="I’m Sanji. I cook for the crew and fight with my legs. Ladies come first."
                skillName="Skill : Black Leg Style"
                skillDetail="A powerful kicking combat style enhanced by speed, fire, and technique."

                imgLink="https://i.pinimg.com/1200x/48/31/ed/4831ede340d0ecb1bd68821080974b07.jpg"
               
              
                />
                {/* chpper card  */}
                <CrewCard
               
             crewName="CHOPPER : THE DOCTOR"
            crewDetail="I’m Tony Tony Chopper. I’m a doctor and a reindeer, but don’t call me cute!"
            skillName="Devil Fruit : Hito Hito no Mi"
            skillDetail="A Zoan fruit that lets me transform and use different combat and medical forms."
             imgLink="https://i.pinimg.com/736x/3e/7b/ab/3e7bab50f225f4106b9c85da7405823f.jpg"
             flexRev="flex-row-reverse"
              
                />
                {/* Robin card  */}
                <CrewCard
               
             crewName="ROBIN : THE ARCHAEOLOGIST"
            crewDetail="I’m Nico Robin. I seek the true history of the world through ancient texts."
            skillName="Devil Fruit : Hana Hana no Mi"
            skillDetail="Allows me to grow body parts anywhere to attack, restrain, or defend."

             imgLink="https://i.pinimg.com/1200x/7a/90/76/7a9076acc23ca59e0b6ac71e76375e47.jpg"
             
              
                />
                {/* franky card  */}
                <CrewCard
               
             
            crewName="FRANKY : THE SHIPWRIGHT"
            crewDetail="SUPER! I’m Franky, a cyborg who built the Thousand Sunny."
            skillName="Skill : Cyborg Weapons"
            skillDetail="Uses powerful mechanical weapons, lasers, and raw strength."


             imgLink="https://i.pinimg.com/736x/10/bd/44/10bd44d3b48e0ac254cd67f4d1aa1ef0.jpg"
             flexRev="flex-row-reverse"
              
                />
                {/* Brook card  */}
                <CrewCard
               
             
          crewName="BROOK : THE MUSICIAN"
        crewDetail="Yohohoho! I’m Brook, a skeleton musician who loves music and jokes."
        skillName="Devil Fruit : Yomi Yomi no Mi"
        skillDetail="Gave me a second life and powers linked to my soul and ice."


             imgLink="https://i.pinimg.com/1200x/03/97/28/039728dae02e88698fb7236732dbef38.jpg"
           
              
                />

                {/* jinbei card  */}
                <CrewCard
               
        crewName="JINBE : THE HELMSMAN"
        crewDetail="I’m Jinbe, a Fish-Man and a man of honor who protects his crew."
        skillName="Skill : Fish-Man Karate"
        skillDetail="A martial art that controls water to deliver powerful internal attacks."


             imgLink="https://i.pinimg.com/1200x/63/05/94/63059440c18b950df8f4f6ae117bd0e1.jpg"
             flexRev="flex-row-reverse"
              
                />
                {/* sonu card  */}
                <CrewCard
               
        crewName="SONU : SANU MANXE"
        crewDetail="I’m sonu, a human and a girl who likes to stay silent cause  Everything happens for a reason..."
        skillName="Skill : Teaching , Smiling , Staying silent "
        skillDetail="A secret art to control other Humans ."


             imgLink={sonu}
             
              
                />


         </div>



    </section>
  )
}

export default Crew