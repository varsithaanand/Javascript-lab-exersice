//let text="this is varsitha. this is java"
function analyseText()
{
    let text=document.getElementById("paragraphinput").value;
    let totalchars=text.length;
    let wordcount=text.split(" ").length
    let nospace=totalchars-(wordcount-1)
    let sentence=text.match;
    let totalsentence=text.match(/[.!?]/g)||[];
    let uniquewords=[...new Set(text.split(" "))].length;
    const freq={};
    wordcount.forEach(word=>{const w=word.toLowercase();
    freq[w]=(freq[w]||0)+1;})
    //const sortedFreq=Object.entries(freq).sort((a,b)=>b[1]-a[1]);
    for(let x in freq){
        console.log(x+" : "+freq[x])
    }
    



   
    console.log(totalchars);
    console.log(wordcount);
    console.log(totalsentence);
    console.log(uniquewords);
}