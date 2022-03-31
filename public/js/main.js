const deleteBtn = document.querySelectorAll('.del')
const verseItem = document.querySelectorAll('span.not')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteVerse)
})





async function deleteVerse(){
    const verseId = this.parentNode.dataset.id
    try{
        const response = await fetch('add-verse/deleteVerse', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'verseIdFromJSFile': verseId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}