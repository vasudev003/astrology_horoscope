import React from 'react'
import Header from './Header'
import './Career.css'

function Career() {
  // start function
  const start = () => {
    const show = document.getElementById('show');
    const bottom = document.querySelector('.bottom');
  
  // event listener when button is clicked
  
   show.addEventListener('click', function(){
    const name = document.getElementById('name').value
    const ageValue = document.getElementById('age').value
    
    // name validator
    if(validator(name)){
      if(ageValue <= 18){
        gender(age[0][nGen(3)])
      } else if (ageValue <= 40) {
        gender(age[1][nGen(3)])
      } else if (ageValue <= 60) {
        gender(age[2][nGen(3)])
      } else if (ageValue <= 80) {
        gender(age[3][nGen(3)])
      } else if (ageValue <= 110) {
        gender(age[4][nGen(3)])
      } else {
        message('Please enter a valid age.')
      }
    } else {
      message('Please enter a valid name.')
    }
  })
  
  // age validator
  const gender = (age) => {
    const gender = document.getElementById('gender').value
    if (gender === 'female') {
      status(age, sex[0][nGen(3)])
    } else if (gender === 'male') {
      status(age, sex[1][nGen(3)])
    } else if (gender === 'bisexual') {
      status(age, sex[2][nGen(3)])
    } else if (gender === 'gay') {
      status(age, sex[3][nGen(3)])
    } else if (gender === 'lesbian') {
      status(age, sex[4][nGen(3)])
    } else if (gender === 'transgender') {
      status(age, sex[5][nGen(3)])
    } 
  }
  
  // marital status validator
  const status = (age, gender) => {
    const stats = document.getElementById('status').value
    if (stats === 'single') {
      display(age, gender, mStats[0][nGen(3)])
    } else if (stats === 'dating') {
      display(age, gender, mStats[1][nGen(3)])
    } else if (stats === 'married') {
      display(age, gender, mStats[2][nGen(3)])
    } else if (stats === 'divorced') {
      display(age, gender, mStats[3][nGen(3)])
    } else if (stats === 'widow') {
      display(age, gender, mStats[4][nGen(3)])
    } 
  }

  // output a display
  const display = (age, gender, stats) => {
    bottom.innerHTML = `
    <h2 class='result'></h2>
      <div class ='luckyNum'>
        <p class='numberTitle'></p>
        <p class='number'></p>
      </div>
    `

    // delay timeout for the display
    setTimeout(() => {
      const res = document.querySelector('.result')
      const nTitle = document.querySelector('.numberTitle')
      const number = document.querySelector('.number')
      let luckyN = luckyNum().sort()

      res.textContent = `${age} ${gender} ${stats}`
      nTitle.textContent = 'Your Lucky Numbers'
      number.textContent = (luckyN.join(', '))

      res.classList.add('fadeIn')
      nTitle.classList.add('fadeIn')
      number.classList.add('fadeIn')
    }, 400);

  }
  
  const nGen = (n) => {
    return Math.floor(Math.random() * n)
  }

  const luckyNum = () => {
    let numbers = new Set();
    let n = [];
    while (numbers.size < 6) numbers.add(nGen(45) + 1);
    numbers.forEach(num =>{
      n.push(num)
    })
    return n
  }

  // display message when error
  const message = (mes) => {
    bottom.innerHTML = `
      <p class='titleRes'></p>
    `
    setTimeout(() => {
      const a = document.querySelector('.titleRes')
      a.textContent = mes
      a.classList.add('fadeIn')
    }, 400);
  }

  // init message display
  message('Let me tell your future. . .')
  
  // validate if name is valid
  const validator = (val) => {
    const format = /^[a-zA-Z]+$/
    if (val.match(format)){
      return true
    } else {
      return false
    }
  }
}
// console.log(start());

  const age = [
    [
      'If you study more, you will learn more.',
      'Your parents words are wisdom for your future.',
      'Learning at school is always best aid for your brighter future.'
    ],
    [
      'College is still an option.',
      'Continue to work hard, you will certainly achieve good results.',
      'You can easily achieve goals in work and get appreciation from the leader.'
    ],
    [
      `In financial aspect, this week's fortune is relatively flat.`,
      'Start a new business and you will be success for your future is so bright.',
      `You have a feeling of understanding your real value in this world.`
    ],
    [
      'Show selfless service to others and a powerful nurturing attitude.',
      'You are mentally agile, and perhaps you are stronger when your happy.',
      'Take your mind off your current circumstances.'
    ],
    [
      'Hope is always there when you aspire for it.',
      'Impart your knowledge to those who are still starting and you are making a legacy.',
      'Your star is still shinning and you can still pass it on.'
    ],
  
  ]
  
  const sex = [
    [
      'A guy will give you a new and unique life perspective.',
      'Your real lover is already there waiting for you but you tend to ignore him.',
      'Your lover is still from the other side of the world, just wait.',
    ],
    [
      'Changing from one girl to another is your bad omen.',
      'Try to make it easy for she loves you.',
      'Do not be too picker for there is always something in her.',
    ],
    [
      'All of them can make you happy and satisfied as long as your honest. ',
      'If you could pick only one, that would be enough.',
      'Share your love to them and you will they will love you more.',
    ],
    [
      'Be real for he is looking at you all the time.',
      'A handsome guy will love you tomorrow.',
      'He is waiting. Do not make it too long.',
    ],
    [
      'She likes you too because you are pretty.',
      'She will say yes if you just only ask.',
      'Keep it like that and spread your love until she will.',
    ],
    [
      'Expect to gain a new understanding of relationship today.',
      'Be yourself and all other people will love you.',
      'Express your love for other pople in tangible ways.',
    ],
  
  ]
  
  const mStats = [
    [
      'Take it slow when it comes to revealing your true intentions to a crush.',
      'Discovering things about someone new is the best part of dating.',
      'Today an unexpected emotional blowout could throw you for a loop.',
    ],
    [
      'You like to go for the gusto, taking bold action on your feelings.',
      'Tomorrow is the worst day for your lover will break up with you.',
      'You will be married soon and have five kids.',
    ],
    [
      'Make room in your romantic life for having fun.',
      'Do not assume your sweetheart knows what you are thinking.',
      'Have that fun and multiply.',
    ],
    [
      'Your x-partner is the only person that you need today.',
      'Watch your affairs today for you might see you ex on your next event.',
      'Hook up with any person in your town and you will be happy.',
    ],
    [
      'Any heart that is willing to love has a hope to love again.',
      'Move on and your life will be filled with love.',
      'Be honest and you can still show your love.',
    ],
  
  ]
  
  

  return (
    <>
      <Header />
      <section>
      <div className="containerr">
      <div className="top">
      <div className="header">
        <h1>Find Your Future</h1>
      </div>
      <div className="entry">
        <div className="input">
          <label className='label' >First Name</label>
          <input id='name' type="text" placeholder="First Name" />
        </div>
        <div className="input">
          <label className='label' >Age</label>
          <input id='age' type="number" min='10' max='100' placeholder='18' /> 
        </div>
        <div className="input">
          <label className='label' >Sex</label>
          <select name="sex" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="bisexual">Bisexual</option>
            <option value="gay">Gay</option>
            <option value="lesbian">Lesbian</option>
            <option value="transgender">Transgender</option>
          </select>
        </div>
        <div className="input">
          <label className='label' >Marital Status</label>
          <select name="status" id="status">
            <option value="single">Single</option>
            <option value="dating">Still Dating</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widow">Widow/Widower</option>
          </select>
        </div>
      </div>
      <button id='show' onClick={start} >Show my future!</button>
    </div>    
    <div className="bottom">
    </div> 
  </div>
  </section>
    </>
  )
}

export default Career