const technical_skills = document.getElementById('technical_skills')
const technical_skills_content = technical_skills.childNodes[3].childNodes[1]
const email = document.getElementById('email')
const emailAddress = document.getElementById('email_address')
const myServiceCards = document.getElementById('cards')

const technical_skill = () =>{

    const beamlak_skills = {
        HTML : 4,
        JavaScript : 4,
        'Node js' : 4,
        'Python' : 4,
        'CSharp' : 2,
        Linux : 3,
        CSS : 3,
        'Web Applications' : 3,
        'Data structures' : 2,
        Algorithms : 2,
        'BackEnd' : 3,
        'Computer Software Maintainance' : 4,
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

const Myservice = () =>{
    const services = [
        {
            title : 'development',
            content : 'Building a costume tailored solution on your technical specification'
        },
        {
            title : 'ui/ux designing',
            content : 'Designing user friendly and minimalist user interface for web applications.'
        },
        {
            title : 'Operating System Maintainance',
            content : 'Operating System Issues Like Re installing windows With Basic Software Installision service Based Your Work Preferance'
        }
    ]
    for(let i = 0; i<= services.length - 1; i++){
        const {title,content} = services[i]
    
        const itemCard = document.createElement('div')
        itemCard.className = 'item card'
        i % 2 == 0 ? itemCard.classList.add('even') : itemCard.classList.add('odd')

        const itemTitle = document.createElement('p')
        itemTitle.className = 'item_title'
        itemTitle.innerHTML = `<b>${title}</b>`
    
        const itemDescription = document.createElement('p')
        itemDescription.className ='item_description'
        itemDescription.textContent = content
    
        itemCard.append(itemTitle,itemDescription)
        cards.append(itemCard)
    }
    for(let service of services){
    }
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
Myservice()
technical_skill()
copy_to_clipboard()