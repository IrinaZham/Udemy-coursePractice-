'use strict'

const personalMovieDB={
    count:0,
    movies:{},
    actors:{},
    genres:[],
    private:false, /*true*/
    start: function(){
      personalMovieDB.count=+prompt('¿Cuántas películas has visto?','');
      
      while (personalMovieDB.count==''|| personalMovieDB.count==null || isNaN (personalMovieDB.count) ){
        personalMovieDB.count=+prompt('¿Cuántas películas has visto?','');
 }
 } ,
      rememberMyFilms: function() {
      for (let i=0; i<2; i++){
            const  a=prompt('¿La última película que has visto?','').trim(),
                   b=prompt('¿Cuál es tu nota?','');
            if (a!=null && b!=null && a!='' && b!='' && a.length<50){ /*50 - eto limit po simbolam ''-eto pustaya stroka=ok, null=otmena*/
                personalMovieDB.movies[a]=b; /*personalMovieDB.movies.a - ploho rabotaet*/ 
                console.log('done')
            } else {
                  console.log('error');
                  i--; /*povtor voprosov*/
            }
          }
},

      detectPersonalLevel: function() {
      if(personalMovieDB.count<10){
            console.log("Has visto pocas películas")
      } else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
            console.log("Has visto una cantidad moderada de películas")
      } else if(personalMovieDB.count>=30){
            console.log("Has visto muchas películas ")
      }
    else {console.lof('error')
    
    };
},
      showMyDB: function(hidden){
      if(!hidden){
            console.log(personalMovieDB);
      };

}, 
      toggleVisibleMyDB: function() {
      if (personalMovieDB.privat) {
          personalMovieDB.privat = false;
      } else {
          personalMovieDB.privat = true;
      }
  },
      writeYourGenres: function() {
      for (let i = 1; i <=3; i++) {
          let genre = prompt(`Tu género favorito es el número ${i}`);

          if (genre === '' || genre == null) {
              console.log('Has introducido datos incorrectos o no los has introducido en absoluto');
              i--;
          } else {
              personalMovieDB.genres[i - 1] = genre;
          } 
      }
      personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};


