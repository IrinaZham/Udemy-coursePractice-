'use strict'
const numberOfFilms=+prompt('¿Cuántas películas has visto?','');
const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
};

for (let i=0; i<2; i++){
  const  a=prompt('¿La última película que has visto?',''),
         b=prompt('¿Cuál es tu nota?','');
  if (a!=null && b!=null && a!='' && b!='' && a.length<50){ /*50 - eto limit po simbolam ''-eto pustaya stroka=ok, null=otmena*/
      personalMovieDB.movies[a]=b; /*personalMovieDB.movies.a - ploho rabotaet*/ 
      console.log('done')
  } else {
        console.log('error');
        i--; /*povtor voprosov*/
  }
}
if(personalMovieDB.count<10){
        console.log("Has visto pocas películas")
  } else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
        console.log("Has visto una cantidad moderada de películas")
  } else if(personalMovieDB.count>=30){
        console.log("Has visto muchas películas ")
  }
else {console.lof('error')

};

console.log(personalMovieDB);