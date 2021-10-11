const favorability_rating_array = document.querySelectorAll(".index_favorability_rating");
const progress_rating_array = document.querySelectorAll(".index_progress_rating");

// 好感度が「70%」〜「79％」
for(let i = 0; i < favorability_rating_array.length; i++) {
    if (70 <= Number(favorability_rating_array[i].textContent.replace("％", "")) && Number(favorability_rating_array[i].textContent.replace("％", "")) < 80) {
        favorability_rating_array[i].classList.add('_70_or_over_and_under_80');
    }
}

// 好感度が「80%」〜「100％」
for(let i = 0; i < favorability_rating_array.length; i++) {
    if (Number(favorability_rating_array[i].textContent.replace("％", "")) >= 80) {
        favorability_rating_array[i].classList.add('_80_or_over');
    }
}

// 進展度が「70%」〜「79％」
for(let i = 0; i < progress_rating_array.length; i++) {
    if (70 <= Number(progress_rating_array[i].textContent.replace("％", "")) && Number(progress_rating_array[i].textContent.replace("％", "")) < 80) {
        progress_rating_array[i].classList.add('_70_or_over_and_under_80');
    }
}

// 進展度が「80%」〜「100％」
for(let i = 0; i < progress_rating_array.length; i++) {
    if (Number(progress_rating_array[i].textContent.replace("％", "")) >= 80) {
        progress_rating_array[i].classList.add('_80_or_over');
    }
}
