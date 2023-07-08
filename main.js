const school = {
    id :3345,
    type: 'swimming',
    levelsDescrp: '[beginner, intermediate, advanced]',
    nameSchool: 'Swimming Cool',
    inscription:500,
    pageMounth: 900,    
    Itemlevels:[
        {
            type:'begginer',
            pageInscr: 300,
            pageMounth: 500,
            pageYear: 0,
            quality:1,
        },
        {
            type:'Intermediate',
            pageInscr: 500,
            pageMounth: 700,
            pageYear: 0,
            quality:1,
        },
        {
            type:'Advanced',
            pageInscr: 600,
            pageMounth: 900,
            pageYear: 0,
            quality:1,
            
        },
    ],
    promoQuality:function(){
        let total = 0;
        this.Itemlevels.forEach(item =>{
            total = total + item.pageInscr*item.quality
        });
        return total;

    },
    firstPageF:function(){
        const firstpage=`El pago inicial es de: ${this.inscription+this.pageMounth}`;
        return firstpage;
    },
    client:{
        id:3324,
        nameClient:'Roge',
        age: 34
    }
}
//let namesS= school.nameSchool;
//console.log( school.firstPageF());
console.log('Total:' + school.promoQuality());
