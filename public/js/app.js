//Set Up function to return Weather for the Loaction
function SubmitForm(searchTerm,callback)
{
const geocodeURL=`http://localhost:3000/weather?address=${searchTerm}`;
fetch(geocodeURL)
.then(response=>response.json().
then(
    data=>
    {
        if(data.error)
        return callback(data.error,undefined);
        return callback(undefined,
            {
            forecast:data.forecast,
            location:data.location
        })
        
    }
    )
    );
}
    
    const form=document.querySelector('form');
    const input=document.querySelector('input');
    const firstPara=document.querySelector('#message1')
    const secondPara=document.querySelector('#message2')
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        firstPara.textContent='Loading...'
        secondPara.textContent=''
        SubmitForm(input.value,(error,data)=>{

            if(error)
            {
                firstPara.textContent=error;
                 
               return;
            
            }
            console.log(data);
            firstPara.textContent=data.location;
            secondPara.textContent= data.forecast;

        })

        
    })
    
