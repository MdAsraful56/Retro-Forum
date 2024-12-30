// console.log("Hello World");



const latest = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    // console.log(data);
    latestDisplay(data);
}

const latestDiv = document.getElementById('latestDiv');

const latestDisplay = (data) => {
    for (const element of data) {
        // console.log(element);

        const div = document.createElement('div');
        div.classList.add('card', 'bg-base-100', 'w-96', 'shadow-xl', 'p-5', 'space-y-5');

        const shortDiv = document.createElement('div');
        shortDiv.classList.add('space-y-2');
        shortDiv.innerHTML = `
        <div class="p-2">
            <img class="rounded-xl" src="${element?.cover_image}" />
        </div>
        <p class="flex flex-row"> <img src="images/date.svg" /> <span>${element?.author?.posted_date || "No publish date"}</span> </p>
        <h4 class="text-black font-bold">What will a mars habitat force that impact in our daily life!!!</h4>
        <p class="text-sm">Yes, you can run unit tests and view the results directly within the app.</p>
        <div class="flex flex-row gap-5 pt-2">
            <div class="w-14 h-14 rounded-full" ><img class=" rounded-full" src="${element.profile_image}" /></div>
            <div>
                <h4 class="text-black font-bold">${element?.author?.name}</h4>
                <p class="text-sm">${element?.author?.designation || "No Works"}</p>
            </div>
        </div>
        `;

        div.append(shortDiv);
        latestDiv.append(div);

    }
}





latest();