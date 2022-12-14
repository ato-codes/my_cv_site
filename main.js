const technical_skills = document.getElementById('technical_skills')
const technical_skills_content = technical_skills.childNodes[3].childNodes[1]
const email = document.getElementById('email')
const emailAddress = document.getElementById('email_address')
const technical_skill = () =>{

    const beamlak_skills = {
        HTML : 4,
        JavaScript : 4,
        Linux : 3,
        CSS : 3,
        'Web Applications' : 2,
        'Data structures' : 2,
        Algorithms : 2
    }
    
    for(let skill in beamlak_skills){
        const item_bar = document.createElement('div')
        item_bar.className = 'item bar'
    
        const item_title = document.createElement('div')
        item_title.className = 'item_title'
        item_title.textContent = skill
    
    
        const bars = document.createElement('div')
        bars.className = 'bars'
    
        for(let i = 0; i <= 4; i++){
            const rec = document.createElement('div')
            rec.className = 'rec'
            if(beamlak_skills[skill]-1 >= i)rec.className = `${rec.className} fill`
            bars.append(rec)
        }
        item_bar.append(item_title,bars)
    
    technical_skills_content.append(item_bar)
    }
    return
}

const copy_to_clipboard = () =>{
    email.onclick = () =>{
        navigator.clipboard.writeText(emailAddress.textContent)
        emailAddress.textContent = 'my email address copied to your clip board'

        setTimeout(()=>{
            emailAddress.textContent = 'thecmboy930@gmail.com'
        },1500)
    }
}


technical_skill()
copy_to_clipboard()