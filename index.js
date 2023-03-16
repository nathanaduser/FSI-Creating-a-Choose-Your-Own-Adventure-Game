

function game() {
  let first_answer = window.prompt("Do you head to the left or to the right?  ")
  let second_answer;
  let third_answer;
  let second_right_answer;
  let third_right_answer;

  
  // choosing your path 
  if (first_answer === "Left") {
    second_answer = window.prompt("You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path?")
  }else if (first_answer === "Right"){
    second_right_answer = window.prompt("You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take?")
  }else{alert("you are not good enough to play")
  }

  // Left Path 2nd imput
  if (second_answer === "Follow"){
    third_answer = window.prompt("You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.")
  }else if (second_answer === "Continue"){ 
    third_answer = window.prompt("You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?");
  }


  // right Path 2nd imput
  if(second_right_answer === "Past the dragon"){
    third_right_answer = window.prompt("The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:")
  }else if (second_right_answer === "Away from the dragon"){
    third_right_answer = window.prompt("After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?    ")
  }

 // Left Path 3rd imput
  if (third_answer === "Stay"){
    window.alert("You live happily amongst the cats for the rest of your days.")
    console.log("you are trap here forever now!")
  }else if (third_answer === "Spread the word"){
    window.alert("After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.")   
  }else if (third_answer === "Ladder"){
    window.alert("After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.")
  }else if (third_answer === "Staircase"){
    window.alert("After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.")
  }

  // right Path 3rd imput
  if (third_right_answer === "Stay"){
    alert("You and the dragon have an uplifting conversation about local politics and become lifelong friends.")
  }else if(third_right_answer === "Run"){
    alert("Quickly, you run back to the cave's entrance. Sheepish, you return home.    ")
  }else if(third_right_answer === "Draw it"){
    alert("You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.    ")
  }else if(third_right_answer === "Pick it"){
    alert("You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.    ")
  }


}
game();

