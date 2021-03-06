const onboardingModal = () => {

  // Pitch
  let onboardPitch = document.querySelector('#onboard-pitch');
  let pitchNew = document.querySelector('.pitches.new')

  // Personas
  let onboardPersona = document.querySelector('#onboard-persona');
  let personaNew = document.querySelector('.personas.new')

  // Userjourney
  let onboardUserjourney = document.querySelector('#onboard-userjourney');
  let userjourneyNew = document.querySelector('.userjourneys.new')


  // ...
  //let
  //let


  if (pitchNew) {
    // let elements = document.querySelectorAll('textarea')
    // let count = elements.length

    // -------------

    let modalBtn = document.querySelector('#hidden-button')
    modalBtn.click()

    if(onboardPitch) {
        let step1 = document.querySelector('#step1')
        let step2 = document.querySelector('#step2')
        let step3 = document.querySelector('#step3')
        let step4 = document.querySelector('#step4')

        let steps = [step1, step2, step3, step4]

        let content1 = document.querySelector('#onboard-pitch .step1')
        let content2 = document.querySelector('#onboard-pitch .step2')
        let content3 = document.querySelector('#onboard-pitch .step3')
        let content4 = document.querySelector('#onboard-pitch .step4')

        let contents = [content1, content2, content3, content4]

        steps.forEach((step) => {

          step.addEventListener('click', (e) => {
            // remove 'active' class from all the steps
            steps.forEach((step) => step.classList.remove('active'))

            // display the correct one
            let targetClass = e.currentTarget.id

            // hide all the contetns
            contents.forEach( (content) => {
              content.classList.add('d-none')
              if(content.classList.contains(targetClass)) {
                content.classList.remove('d-none')
              }
            })

            // add tthe 'active classe to the step'
            e.target.classList.add('active')

          });

        })
    }
  }


  // persona

if (personaNew) {
    // let elements = document.querySelectorAll('textarea')
    // let count = elements.length

    // -------------

    let modalBtn = document.querySelector('#hidden-button')
    modalBtn.click()

    if(onboardPersona) {
        let step1 = document.querySelector('#step1')
        let step2 = document.querySelector('#step2')
        let step3 = document.querySelector('#step3')
        let step4 = document.querySelector('#step4')

        let steps = [step1, step2, step3, step4]

        let content1 = document.querySelector('#onboard-persona .step1')
        let content2 = document.querySelector('#onboard-persona .step2')
        let content3 = document.querySelector('#onboard-persona .step3')
        let content4 = document.querySelector('#onboard-persona .step4')

        let contents = [content1, content2, content3, content4]

        steps.forEach((step) => {

          step.addEventListener('click', (e) => {
            // remove 'active' class from all the steps
            steps.forEach((step) => step.classList.remove('active'))

            // display the correct one
            let targetClass = e.currentTarget.id

            // hide all the contetns
            contents.forEach( (content) => {
              content.classList.add('d-none')
              if(content.classList.contains(targetClass)) {
                content.classList.remove('d-none')
              }
            })

            // add tthe 'active classe to the step'
            e.target.classList.add('active')

          });

        })
    }
  }



  // userjourney

if (userjourneyNew) {
    // let elements = document.querySelectorAll('textarea')
    // let count = elements.length

    // -------------

    let modalBtn = document.querySelector('#hidden-button')
    modalBtn.click()

    if(onboardUserjourney) {
        let step1 = document.querySelector('#step1')
        let step2 = document.querySelector('#step2')
        let step3 = document.querySelector('#step3')
        let step4 = document.querySelector('#step4')

        let steps = [step1, step2, step3, step4]

        let content1 = document.querySelector('#onboard-userjourney .step1')
        let content2 = document.querySelector('#onboard-userjourney .step2')
        let content3 = document.querySelector('#onboard-userjourney .step3')
        let content4 = document.querySelector('#onboard-userjourney .step4')

        let contents = [content1, content2, content3, content4]

        steps.forEach((step) => {

          step.addEventListener('click', (e) => {
            // remove 'active' class from all the steps
            steps.forEach((step) => step.classList.remove('active'))

            // display the correct one
            let targetClass = e.currentTarget.id

            // hide all the contetns
            contents.forEach( (content) => {
              content.classList.add('d-none')
              if(content.classList.contains(targetClass)) {
                content.classList.remove('d-none')
              }
            })

            // add tthe 'active classe to the step'
            e.target.classList.add('active')

          });

        })
    }
  }


}


export { onboardingModal }
