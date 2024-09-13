const numberOfFilms=+prompt('Cuantas peliqulas has visto?','');
const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
};
/*const a=prompt('La ultima peliqula que has visto?',''),
      b=prompt('Tu nota?',''),
      c=prompt('La ultima peliqula que has visto?',''),
      d=prompt('Tu nota?','');*/

      for (let i=0; i<2; i++){
      const  a=prompt('La ultima peliqula que has visto?',''),
      b=prompt('Tu nota?','');
      if (a!=null && b!=null && a!='' && b!='' && a.length<50){
      personalMovieDB.movies[a]=b; /*personalMovieDB.movies.a - ploho rabotaet, a -svoystvo obj,b-znacheniye*/ 
      console.log('done')}
      else {
        console.log('error');
        i--;
      }
    }
    if(personalMovieDB.count<10){
        console.log("has visto malo filmov")
    }
    else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
        console.log("klassic")
    }
    else if(personalMovieDB.count>=30){
        console.log("kinoman")
    }
    else {console.lof('error')};


     
    /*  personalMovieDB.movies[c]=d;*/
      console.log(personalMovieDB);