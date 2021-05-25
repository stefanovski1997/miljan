$(function() {

    function dodajDugOpis(skracenica, ceoTekst){
        skracenica="See more...";
        return `<a class="seeMore" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">` + skracenica + `</a>
        <div class="collapse" id="collapseExample">
            <p>` + ceoTekst + `</p>
        </div>`;
    }

    $(document).on("click", '.seeMore', function(){
        if($(this).attr('aria-expanded')=='true')
        {
            $(this).text("See less...");
        }
        else
        {
            $(this).text("See more...");
        }
    });

    //Gallery 1
    $('#gallery1').on('click', function() {
           $(this).lightGallery({
               dynamic: true,
               dynamicEl: [{
                "src": './images/slike_sajt/Characters/00_mealek_character.jpg',
                'thumb': './images/slike_sajt/Characters/00_mealek_character.jpg',
                'subHtml': '<h4>Character drawing, 2019.</h4>' 
                }, 
                {
                "src": './images/slike_sajt/Characters/01_mealek_character.jpg',
                'thumb': './images/slike_sajt/Characters/01_mealek_character.jpg',
                'subHtml': '<h4>Stylized character design, 2019.</h4>' + dodajDugOpis('See more', "This is Aya. Her job is to eliminate specifically selected people for political reason- other known as Assasin. She was in near death situation 7 years ago when she was saved and reworked by underground organization who call themselves as 'The Throne'. Type: Headhunter Class: Cyborg")
                }, 
                {
                "src": './images/slike_sajt/Characters/02_mealek_character.jpg',
                'thumb': './images/slike_sajt/Characters/02_mealek_character.jpg',
                'subHtml': '<h4>Fanart character redesign, 2019.</h4>' + dodajDugOpis('See more', "This is Tae Joon. He was a hacker but suddenly came across the program that could determine the winner of the Games ('The Game' is some kind of hunger games). Shortly after that his sister got kidnaped and he was accused of it! Ever since that he's on the run- some say that he may even joined the Game under alias 'Crypto' Type: Surveillance expert Class: Human enchanted with technology ")
                }, 
                {
                "src": './images/slike_sajt/Characters/03_mealek_illustration.jpg',
                'thumb': './images/slike_sajt/Characters/03_mealek_illustration.jpg',
                'subHtml': '<h4>Stylized character design, 2019.</h4>' + dodajDugOpis('See more', "This is Son. A very unusual boy. Although his physical appearance seems somewhat unusual- wait to see what's going on inside his head! Wherever he goes he is carrying that big coffin on his back and not many people can exactly tell you what is inside...Most popular rumor is that the boy failed some kind of test and now hes burdened to carry it. What ever may be inside that coffin that makes him company, he is also accompanied by mystical creature called Whisp. Type: Swordsmith Class: I guess human")
                }, 
                {
                "src": './images/slike_sajt/Characters/04_mealek_character.jpg',
                'thumb': './images/slike_sajt/Characters/04_mealek_character.jpg',
                'subHtml': "<h4>Character drawing, 2019.</h4><p>Harpie design</p>"
                }, 
                {
                "src": './images/slike_sajt/Characters/05_mealek_characters.jpg',
                'thumb': './images/slike_sajt/Characters/05_mealek_characters.jpg',
                'subHtml': '<h4>Stylized character, 2019.</h4>' + dodajDugOpis('See more', "This is Bogif. His life was not suposed to be what it is now. He expected joy, piece...but along the way things got a little bit out of control. Life happened. He got himself into real bad environment and that caused a series of unfortunate events leading to him now being forced to fight for survival. This is not the first time he is in this kind of situation but this time it may be the end for one side or another. Class: He doesn't want to talk about that Type: Human")
                }, 
                {
                "src": './images/slike_sajt/Characters/06_mealek_character.jpg',
                'thumb': './images/slike_sajt/Characters/06_mealek_character.jpg',
                'subHtml': '<h4>Stylized character, 2019.</h4>' + dodajDugOpis('See more', "This is Alex. He is cool, except that he always wears his Spyro hoodie!He is born on the streets and that's where he spends all his time. He lives on he's own🔥 Most of the time he gets into trouble because of stealing or silly brawls. Type: thief Class: Human")
                }, 
                {
                "src": './images/slike_sajt/Characters/07_mealek_character.jpg',
                'thumb': './images/slike_sajt/Characters/07_mealek_character.jpg',
                'subHtml': '<h4>Fanart drawing, 2019.</h4>' + dodajDugOpis('See more', "Since everything rolls around main character Steve- as Herobrine is evil version of him, Zombie is just Steve but infected with a virus,and a little bit rotten. Zombies spawn at night and hunt the main character")
                }, 
                {
                "src": './images/slike_sajt/Characters/08_mealek_character.jpg',
                'thumb': './images/slike_sajt/Characters/08_mealek_character.jpg',
                'subHtml': '<h4>Stylized character, 2019.</h4>' + dodajDugOpis('See more', "This is Toxic. Former chemistry profesor and ex member of military special forces. After a fatal incident when he lost his wife and two sons he went berserk and shortly after got a criminal record. There were couple of noted cases where he was seen poisoning his enemies with a gas and brutally finishing them with a shotgun...Type: offensive Class: human")
                }]
           })
       });

       //Gallery 2
       $('#gallery2').on('click', function() {
        $(this).lightGallery({
            dynamic: true,
            dynamicEl: [{
                "src": './images/slike_sajt/Illustrations/00_mealek_illustration.jpg',
                'thumb': './images/slike_sajt/Illustrations/00_mealek_illustration.jpg',
                'subHtml': '<h4>Illustration, 2019.</h4>' + dodajDugOpis('See more', "This is H3-Ar7. Hes a sentient robot that heals and recovers people and other robots from most fatal wounds. He does that to compensate for what he had done in the past💀 After near death situation life gave him second chance! He was actually created to do harm and kill everything in its path leaving nothing behind. BUT he also created M.I.T.T.E.N.S. to be his companion. If he ever kills again- M.I.T.T.E.N.S. will surely stop him. Type: Bio Robot Class: Support")
                }, 
                {
                "src": './images/slike_sajt/Illustrations/01_mealek_illustration.jpg',
                'thumb': './images/slike_sajt/Illustrations/01_mealek_illustration.jpg',
                'subHtml': '<h4>Illustration, 2019.</h4><p>Girl in the woods</p>'
                }, 
                {
                "src": './images/slike_sajt/Illustrations/02_mealek_illustration.jpg',
                'thumb': './images/slike_sajt/Illustrations/02_mealek_illustration.jpg',
                'subHtml': '<h4>Illustration, 2019.</h4>' + dodajDugOpis('See more', "This is Charlie. She is on a road trip to find her father. You see, she is always happy and cheerful but her childhood was- lets say not the best one. She grew up without a mother and growing up without such a figure is very hard especially for girls. One day Charlie discovered something forbidden and after that some people broke into garage where she was working with her dad- injured her left arm and kidnapped her dad. That was 7 years ago. Type: Techician Class: Human")
                }, 
                {
                "src": './images/slike_sajt/Illustrations/03_mealek_illustration.jpg',
                'thumb': './images/slike_sajt/Illustrations/03_mealek_illustration.jpg',
                'subHtml': '<h4>Illustration, 2019.</h4><p>Porsche pig</p>'
                },
                {
                "src": './images/slike_sajt/Illustrations/04_mealek_illustration.jpg',
                'thumb': './images/slike_sajt/Illustrations/04_mealek_illustration.jpg',
                'subHtml': '<h4>Illustration, 2019.</h4><p>This is Sphynix warrior. Class: Samurai Type: Human cat combo</p>'
                }, 
                {
                "src": './images/slike_sajt/Illustrations/05_mealek_illustration.jpg',
                'thumb': './images/slike_sajt/Illustrations/05_mealek_illustration.jpg',
                'subHtml': '<h4>Illustration, 2019.</h4>' + dodajDugOpis('See more', "Young Onion Boi. First thing he remembers is waking up in some kind of shot glass and feeling a bit wacky. After that he felt that he was moved again, but this time in a bigger glass with comfy dirt in it...Ever since than hes been growing up really fast. Being carefree and having someone dedicated to take care of you sounds like a preety good life for a young onion boy, But every night he dreams about being independent and getting out of that pot so he can go out and conquer the woorld!!!")
                }, 
                {
                "src": './images/slike_sajt/Illustrations/06_mealek_illustration.jpg',
                'thumb': './images/slike_sajt/Illustrations/06_mealek_illustration.jpg',
                'subHtml': '<h4>Illustration, 2019.</h4><p>Lurker</p>'
                }, 
                {
                "src": './images/slike_sajt/Illustrations/07_mealek_illustration.jpg',
                'thumb': './images/slike_sajt/Illustrations/07_mealek_illustration.jpg',
                'subHtml': '<h4>Illustration, 2019. </h4><p>Boat series</p>'
                }, 
                {
                "src": './images/slike_sajt/Illustrations/08_mealek_illustration.jpg',
                'thumb': './images/slike_sajt/Illustrations/08_mealek_illustration.jpg',
                'subHtml': '<h4>Illustration, 2019. </h4><p>Boat series</p>'
                }, 
                {
                "src": './images/slike_sajt/Illustrations/09_mealek_illustration.jpg',
                'thumb': './images/slike_sajt/Illustrations/09_mealek_illustration.jpg',
                'subHtml': '<h4>Illustration, 2019. </h4><p>Boat series</p>'
                }, 
                {
                "src": './images/slike_sajt/Illustrations/10_mealek_illustartion.jpg',
                'thumb': './images/slike_sajt/Illustrations/10_mealek_illustartion.jpg',
                'subHtml': "<h4>Illustration, 2019. </h4><p>Boat series</p>"
                }]
        })
    });

    //Gallery 3
    $('#gallery3').on('click', function() {
        $(this).lightGallery({
            dynamic: true,
            dynamicEl: [{
                "src": './images/slike_sajt/Package Design/1_mealek_package.jpg',
                'thumb': './images/slike_sajt/Package Design/1_mealek_package.jpg',
                'subHtml': '<h4>Package design, 2019.</h4><p>Eye catching package design for a candy stash.</p>'
            }, {
                'src': './images/slike_sajt/Package Design/2_mealek_package.jpg',
                'thumb': './images/slike_sajt/Package Design/2_mealek_package.jpg',
                'subHtml': "<h4>Package design, 2019.</h4><p>Back side</p>"
            }, {
                'src': './images/slike_sajt/Package Design/package.jpg',
                'thumb': './images/slike_sajt/Package Design/package.jpg',
                'subHtml': "<h4>Package design, 2019.</h4><p>Book cover design with custom typografy.</p>"
            }]
        })
    });

    //Gallery 4
    $('#gallery4').on('click', function() {
        $(this).lightGallery({
            dynamic: true,
            dynamicEl: [{
                "src": './images/slike_sajt/Photography Portraits/00_mealek_portrait.jpg',
                'thumb': './images/slike_sajt/Photography Portraits/00_mealek_portrait.jpg',
                'subHtml': '<h4>Portrait female, 2019.</h4><p>Traditional portrait</p>'
                }, 
                {
                "src": './images/slike_sajt/Photography Portraits/01_mealek_portrait.jpg',
                'thumb': './images/slike_sajt/Photography Portraits/01_mealek_portrait.jpg',
                'subHtml': '<h4>Portrait female, 2019.</h4><p>Half profile</p>'
                }, 
                {
                "src": './images/slike_sajt/Photography Portraits/02_mealek_portrait.jpg',
                'thumb': './images/slike_sajt/Photography Portraits/02_mealek_portrait.jpg',
                'subHtml': '<h4>Portrait female, 2019.</h4><p>Traditional portrait</p>'
                },
                {
                "src": './images/slike_sajt/Photography Portraits/03_mealek_portrait.jpg',
                'thumb': './images/slike_sajt/Photography Portraits/03_mealek_portrait.jpg',
                'subHtml': '<h4>Portrait male, 2019.</h4><p>Half portrait</p>'
                }, 
                {
                "src": './images/slike_sajt/Photography Portraits/04_mealek_portrait.jpg',
                'thumb': './images/slike_sajt/Photography Portraits/04_mealek_portrait.jpg',
                'subHtml': '<h4>Portrait female, 2019.</h4><p>Studio</p>'
                }, 
                {
                "src": './images/slike_sajt/Photography Portraits/05_mealek_portrait.jpg',
                'thumb': './images/slike_sajt/Photography Portraits/05_mealek_portrait.jpg',
                'subHtml': '<h4>Portrait female, 2019.</h4><p>Studio</p>'
                }, 
                {
                "src": './images/slike_sajt/Photography Portraits/06_mealek_portrait.jpg',
                'thumb': './images/slike_sajt/Photography Portraits/06_mealek_portrait.jpg',
                'subHtml': '<h4>Portrait female, 2019.</h4><p>Environmental portrait</p>'
                }, 
                {
                "src": './images/slike_sajt/Photography Portraits/07_mealek_portrait.jpg',
                'thumb': './images/slike_sajt/Photography Portraits/07_mealek_portrait.jpg',
                'subHtml': '<h4>Portrait female, 2019.</h4><p>American shot</p>'
                }, 
                {
                "src": './images/slike_sajt/Photography Portraits/08_mealek_portrait.jpg',
                'thumb': './images/slike_sajt/Photography Portraits/08_mealek_portrait.jpg',
                'subHtml': '<h4>Portrait male, 2019.</h4><p>Boukeh</p>'
                }, 
                {
                "src": './images/slike_sajt/Photography Portraits/8_mealek_portrait.jpg',
                'thumb': './images/slike_sajt/Photography Portraits/8_mealek_portrait.jpg',
                'subHtml': "<h4>Portrait male, 2019.</h4><p>Mirror eye</p>"
                }]
        })
    });

    //Gallery 5
    $('#gallery5').on('click', function() {
        $(this).lightGallery({
            dynamic: true,
            dynamicEl: [{
                "src": './images/slike_sajt/Photography Street/00_mealek_street.jpg',
                'thumb': './images/slike_sajt/Photography Street/00_mealek_street.jpg',
                'subHtml': '<h4>Street photo, 2019.</h4><p>/</p>'
                }, 
                {
                "src": './images/slike_sajt/Photography Street/01_mealek_street.jpg',
                'thumb': './images/slike_sajt/Photography Street/01_mealek_street.jpg',
                'subHtml': '<h4>Street photo, 2019.</h4><p>/</p>'
                }, 
                {
                "src": './images/slike_sajt/Photography Street/02_mealek_street.jpg',
                'thumb': './images/slike_sajt/Photography Street/02_mealek_street.jpg',
                'subHtml': '<h4>Street photo, 2019.</h4><p>/</p>'
                },
                {
                "src": './images/slike_sajt/Photography Street/03_mealek_street.jpg',
                'thumb': './images/slike_sajt/Photography Street/03_mealek_street.jpg',
                'subHtml': '<h4>Street photo, 2019.</h4><p>/</p>'
                }, 
                {
                "src": './images/slike_sajt/Photography Street/04_mealek_street.jpg',
                'thumb': './images/slike_sajt/Photography Street/04_mealek_street.jpg',
                'subHtml': '<h4>Street photo, 2019.</h4><p>/</p>'
                }, 
                {
                "src": './images/slike_sajt/Photography Street/05_mealek_street.jpg',
                'thumb': './images/slike_sajt/Photography Street/05_mealek_street.jpg',
                'subHtml': '<h4>Street photo, 2019.</h4><p>/</p>'
                }, 
                {
                "src": './images/slike_sajt/Photography Street/06_mealek_street.jpg',
                'thumb': './images/slike_sajt/Photography Street/06_mealek_street.jpg',
                'subHtml': '<h4>Street photo, 2019.</h4><p>/</p>'
                }, 
                {
                "src": './images/slike_sajt/Photography Street/07_mealek_street.jpg',
                'thumb': './images/slike_sajt/Photography Street/07_mealek_street.jpg',
                'subHtml': '<h4>Street photo, 2019.</h4><p>/</p>'
                }, 
                {
                "src": './images/slike_sajt/Photography Street/08_mealek_street.jpg',
                'thumb': './images/slike_sajt/Photography Street/08_mealek_street.jpg',
                'subHtml': '<h4>Street photo, 2019.</h4><p>/</p>'
                }, 
                {
                "src": './images/slike_sajt/Photography Street/09_mealek_street.jpg',
                'thumb': './images/slike_sajt/Photography Street/09_mealek_street.jpg',
                'subHtml': "<h4>Street photo, 2019.</h4><p>/</p>"
                }]
        })
    });

    //Gallery 6
    $('#gallery6').on('click', function() {
        $(this).lightGallery({
            dynamic: true,
            dynamicEl: [{
                "src": './images/slike_sajt/Traditional Drawings/00_mealek_tradi.jpg',
                'thumb': './images/slike_sajt/Traditional Drawings/00_mealek_tradi.jpg',
                'subHtml': '<h4>Soft pastells, 2018.</h4><p>Portrait</p>'
                }, 
                {
                "src": './images/slike_sajt/Traditional Drawings/01_mealek_tradi.jpg',
                'thumb': './images/slike_sajt/Traditional Drawings/01_mealek_tradi.jpg',
                'subHtml': '<h4>Charcoal, 2018.</h4><p>Expression</p>'
                }, 
                {
                "src": './images/slike_sajt/Traditional Drawings/1_mealek_tradi.jpg',
                'thumb': './images/slike_sajt/Traditional Drawings/1_mealek_tradi.jpg',
                'subHtml': '<h4>Tempera, 2018.</h4><p>Still nature</p>'
                 }, 
                {
                "src": './images/slike_sajt/Traditional Drawings/02_mealek_tradi.jpg',
                'thumb': './images/slike_sajt/Traditional Drawings/02_mealek_tradi.jpg',
                'subHtml': '<h4>Soft pastell, 2019.</h4><p>Portrait</p>'
                },
                {
                "src": './images/slike_sajt/Traditional Drawings/03_mealek_tradi.jpg',
                'thumb': './images/slike_sajt/Traditional Drawings/03_mealek_tradi.jpg',
                'subHtml': '<h4>Soft pastell, 2017.</h4><p>Portrait</p>'
                }, 
                {
                "src": './images/slike_sajt/Traditional Drawings/04_mealek_traditional.jpg',
                'thumb': './images/slike_sajt/Traditional Drawings/04_mealek_traditional.jpg',
                'subHtml': '<h4>Graphite, 2018.</h4><p>Portrait</p>'
                }, 
                {
                "src": './images/slike_sajt/Traditional Drawings/05_mealek_tradi.jpg',
                'thumb': './images/slike_sajt/Traditional Drawings/05_mealek_tradi.jpg',
                'subHtml': '<h4>Ink, 2018.</h4><p>Portrait</p>'
                }, 
                {
                "src": './images/slike_sajt/Traditional Drawings/06_mealek_tradi.jpg',
                'thumb': './images/slike_sajt/Traditional Drawings/06_mealek_tradi.jpg',
                'subHtml': '<h4>Colored pencils, 2018.</h4><p>Portrait</p>'
                }, 
                {
                "src": './images/slike_sajt/Traditional Drawings/07_mealek_tradi.jpg',
                'thumb': './images/slike_sajt/Traditional Drawings/07_mealek_tradi.jpg',
                'subHtml': '<h4>Tempera, 2016.</h4><p>Scene</p>'
                }, 
                {
                "src": './images/slike_sajt/Traditional Drawings/08_mealek_tradi.jpg',
                'thumb': './images/slike_sajt/Traditional Drawings/08_mealek_tradi.jpg',
                'subHtml': '<h4>Charcoal, 2016.</h4><p>Hald profile</p>'
                }, 
                {
                "src": './images/slike_sajt/Traditional Drawings/09_mealek_tradi.jpg',
                'thumb': './images/slike_sajt/Traditional Drawings/09_mealek_tradi.jpg',
                'subHtml': "<h4>Mixed media, 2015.</h4><p>Expression</p>"
                }]
        })
    });
});
