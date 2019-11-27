module.exports = async function (context) {  
    // נ (Nun), ג (Gimmel), ה (Hay), and ש (Shin)
    var num = Math.floor(Math.random() * 3);
    var values = ['ג','ה','ש','נ']
        context.res = {
            body: values[num]
        };
   
};