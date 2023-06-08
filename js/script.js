/*
Quiz Data: This Array contains objects data for Questions, 
Options, and correct Answers
*/

const quizData = [
  {
    id: 'Question 1',
    question: 'What does HTML stands for?',
    options: [
      'Hyperlinks and Text Mark-up Language',
      'Home Tool Mark-up Lnaguage',
      'Hyper Text Mark-up Language'
    ],
    correctAnswer: 'Hyper Text Mark-up Language'
  },

  {
    id: 'Question 2',
    question: 'Who is making the Web standards?',
    options: ['Google', 'The World Wide Web', 'Microsoft'],
    correctAnswer: 'The World Wide Web'
  },
  {
    id: 'Question 3',
    question: 'Choose the correct HTML Element for the largest Heading?',
    options: ['<heading>', '<h1>', '<head>'],
    correctAnswer: '<h1>'
  },
  {
    id: 'Question 4',
    question: "What's the correct HTML Element for inserting a line break?",
    options: ['<break>', '<br>', '<b>'],
    correctAnswer: '<br>'
  },
  {
    id: 'Question 5',
    question: "What's the correct HTML for adding a background color?",
    options: [
      '<body bg="yellow">',
      '<body style="background-color:yellow">',
      '<background>yellow</background>'
    ],
    correctAnswer: '<body style="background-color:yellow">'
  },
  {
    id: 'Question 6',
    question: 'Choose the correct HTML Element to Define important text?',
    options: ['<strong>', '<important>', '<i>'],
    correctAnswer: '<strong>'
  },
  {
    id: 'Question 7',
    question: 'Choose the correct HTML Element to Define emphasized text',
    options: ['<i>', '<em>', '<italic>'],
    correctAnswer: '<em>'
  },
  {
    id: 'Question 8',
    question: ' What is the correct HTML for creating a hyperlink?',
    options: [
      '<a href="http://www.go.org">GO</a>',
      '<a url="https://www.go.org">GO</a>',
      '<a href="https://www.go.org">GO</a>'
    ],
    correctAnswer: '<a href="https://www.go.org">GO</a>'
  },
  {
    id: 'Question 9',
    question: 'Which Character is used to indicate on end tag?',
    options: ['^', '\\', '/'],
    correctAnswer: '/'
  },
  {
    id: 'Question 10',
    question: 'How can you open a link in a new tab/browser?',
    options: [
      '<a href="url" target="new">',
      '<a url="url" new>',
      '<a href="url" target="_blank">'
    ],
    correctAnswer: '<a href="url" target="_blank">'
  },
  {
    id: 'Question 11',
    question: 'Which of those elements are all <table> elements?',
    options: [
      '<table>, <tr>, <tt>',
      '<table>, <body>, <tr>',
      '<table>, <tr>, <td>'
    ],
    correctAnswer: '<table>, <tr>, <td>'
  },
  {
    id: 'Question 12',
    question:
      'Inline elements are normally displayed without starting a new line?',
    options: ['True', 'False', 'Not Sure'],
    correctAnswer: 'True'
  },
  {
    id: 'Question 13',
    question: 'How can you make a numbered List?',
    options: ['<list>', '<ol>', '<ul>'],
    correctAnswer: '<ol>'
  },
  {
    id: 'Question 14',
    question: 'How can you make a unordered list?',
    options: ['<dl>', '<ol>', '<ul>'],
    correctAnswer: '<ul>'
  },
  {
    id: 'Question 15',
    question: 'Choose the correct HTML Element for making a drop-down List?',
    options: ['<input type="dropdown">', '<select>', '<input type="list">'],
    correctAnswer: '<select>'
  },
  {
    id: 'Question 16',
    question: 'An <Iframe> is used to display a web page within a Web?',
    options: ['True', 'False', 'There is no such things as an <iframe>'],
    correctAnswer: 'True'
  },
  {
    id: 'Question 17',
    question: "What's the correct HTML for inserting a background image?",
    options: [
      '<bacground img="background.gif">',
      '<body bg="background.gif">',
      '<body style="background-image:url(background.gif)">'
    ],
    correctAnswer: '<body style="background-image:url(background.gif)">'
  },
  {
    id: 'Question 18',
    question: 'HTML comments start with <!--- and end with --->?',
    options: ['True', 'False', 'Not Sure'],
    correctAnswer: 'True'
  },
  {
    id: 'Question 19',
    question:
      'Which HTML Attribute Specifies an alternate text for an image, if the image can not be displayed?',
    options: ['src', 'title', 'alt'],
    correctAnswer: 'alt'
  },
  {
    id: 'Question 20',
    question: 'Which datatype is correct for HTML5?',
    options: ['<!DOCTYPE HTML5>', '<!DOCTYPE html>', "I don't know"],
    correctAnswer: '<!DOCTYPE html>'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  // Variables (quiz)
  const quizQuestions = document.querySelector('[data-quiz_questions]')
  const nextBtn = document.querySelector('[data-next_btn]')
  const submitBtn = document.querySelector('.submit_btn')
  const option1 = document.getElementById('option1')
  const option2 = document.getElementById('option2')
  const option3 = document.getElementById('option3')

  // Initialising score and questions index in the array
  let score = 0
  let questionIndex = 0

  // Display questions when the window is loaded
  window.onload = () => {
    displayQuestions(questionIndex)
  }

  const displayQuestions = questionCount => {
    const [firstOption, secondOption, thirdOption] =
      quizData[questionCount].options
    quizQuestions.innerText = `Q(${questionCount + 1} / ${quizData.length}). ${
      quizData[questionCount].question
    }`

    option1.innerText = `${firstOption}`
    option2.innerText = `${secondOption}`
    option3.innerText = `${thirdOption}`

    toggleActive()
    toggleButtons(questionCount)
  }

  const toggleActive = () => {
    const option = document.querySelectorAll('li.option')
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = () => {
        for (let j = 0; j < option.length; j++) {
          if (option[j].classList.contains('active')) {
            option[j].classList.remove('active')
          }
        }
        option[i].classList.add('active')
      }
      option[i].classList.remove('active')
    }
  }

  const toggleButtons = questionCount => {
    if (questionCount === quizData.length - 1) {
      nextBtn.style.display = 'none'
      submitBtn.style.display = 'block'
    } else {
      nextBtn.style.display = 'block'
      submitBtn.style.display = 'none'
    }
  }

  nextBtn.addEventListener('click', () => {
    const userAnswer = document.querySelector('.option.active')
    if (
      userAnswer &&
      userAnswer.innerText === quizData[questionIndex].correctAnswer
    ) {
      score += 5
      sessionStorage.setItem('score', score)
    }

    questionIndex++
    displayQuestions(questionIndex)
  })

  submitBtn.addEventListener('click', () => {
    const userAnswer = document.querySelector('.option.active')
    if (
      userAnswer &&
      userAnswer.innerText === quizData[questionIndex].correctAnswer
    ) {
      score += 5
      sessionStorage.setItem('score', score)
    }

    // Redirect to the score page
    location.href = 'score.html'
  })
})
