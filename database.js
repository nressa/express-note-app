const notes = [
    {
        id: 1,
        title: "Walk on a keyboard one of these days i'm going to get that red dot, just you wait and see sniff all the things",
        contents: "Cats go for world domination stare at owner accusingly then wink floof tum, tickle bum, jellybean footies curly toes playing with balls of wool. Chew foot i like big cats and i can not lie playing with balls of wool sniff all the things asdflkjaertvlkjasntvkjn (sits on keyboard). Attack the child. Stare out cat door then go back inside steal raw zucchini off kitchen counter but where is my slave? I'm getting hungry or jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water. I like big cats and i can not lie curl into a furry donut. Chase laser. Hunt by meowing loudly at 5am next to human slave food dispenser push your water glass on the floor so howl on top of tall thing what a cat-ass-trophy! warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats, stare at ceiling light refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am. Loves cheeseburgers knock dish off table head butt cant eat out of my own dish scratch my tummy actually i hate you now fight me for walk on keyboard or hate dog, or proudly present butt to human but meow all night.",
        created_at: Date.now()
    },
    {
        id: 2,
        title: "Sweet beast",
        contents: "Cat slap dog in face stand with legs in litter box, but poop outside meow meow you are my owner so here is a dead bird for shred all toilet paper and spread around the house. Roll on the floor purring your whiskers off hey! you there, with the hands. Paw your face to wake you up in the morning intrigued by the shower, or commence midnight zoomies, yet run in circles. Lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back hiss at vacuum cleaner. Cough hairball, eat toilet paper catch eat throw up catch eat throw up bad birds, but small kitty warm kitty little balls of fur but sleeping in the box. Please stop looking at your phone and pet me attack the child skid on floor, crash into wall present belly, scratch hand when stroked. When owners are asleep, cry for no apparent reason shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff cough furball into food bowl then scratch owner for a new one but scratch me now! stop scratching me!. Steal mom's crouton while she is in the bathroom let me in let me out let me in let me out let me in let me out who broke this door anyway yet i rule on my back you rub my tummy i bite you hard so bathe private parts with tongue then lick owner's face walk on keyboard.",
        created_at: Date.now()
    },
    {
        id: 3,
        title: "Cute Cat",
        contents: "Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am check cat door for ambush 10 times before coming in. Check cat door for ambush 10 times before coming in. Cats are fats i like to pets them they like to meow back. Tuxedo cats always looking dapper attack feet, for meow meow mama for experiences short bursts of poo-phoria after going to the loo but touch my tail, i shred your hand purrrr walk on a keyboard. Trip owner up in kitchen i want food.",
        created_at: Date.now()
    }
]

export function getNotes() {
    return notes
}

export function getNote(id) {
    return notes.find(note => note.id === id)
}

export function addNote(note) {
    notes.push({
        ...note,
        id: notes.length+1,
        created_at: Date.now()
    })
}