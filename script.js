// console.log("Hello World");

const allPost = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    allPostDisplay(data);
    btnHanglar(data);
}

const btnHanglar = (data) => {

    let readSection = document.getElementById('readSection');

    // card - 01 read section 
    let id1 = document.getElementById('seeBtn-101');
    id1.addEventListener('click', function(){
        const title = document.getElementById('title-101').innerText;
        const view = document.getElementById('view-101').innerText;

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex flex-row justify-between bg-[#e5dfdfb2] rounded-md p-3">
            <h3 class="text-lg font-medium text-black">${title}</h3>
            <div class="flex flex-row justify-center items-center text-center">
                <img src="images/tabler-icon-eye.svg" class="w-10 h-5" />
                <p>${view}</p>
            </div>
        </div>
        `;
        readSection.append(div);
    });


    // card - 02 read section 
    let id2 = document.getElementById('seeBtn-102');
    id2.addEventListener('click', function(){
        const title = document.getElementById('title-102').innerText;
        const view = document.getElementById('view-102').innerText;

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex flex-row justify-between bg-[#e5dfdfb2] rounded-md p-3">
            <h3 class="text-lg font-medium text-black">${title}</h3>
            <div class="flex flex-row justify-center items-center text-center">
                <img src="images/tabler-icon-eye.svg" class="w-10 h-5" />
                <p>${view}</p>
            </div>
        </div>
        `;
        readSection.append(div);
    });


    // card - 03 read section 
    let id3 = document.getElementById('seeBtn-103');
    id3.addEventListener('click', function(){
        const title = document.getElementById('title-103').innerText;
        const view = document.getElementById('view-103').innerText;

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex flex-row justify-between bg-[#e5dfdfb2] rounded-md p-3">
            <h3 class="text-lg font-medium text-black">${title}</h3>
            <div class="flex flex-row justify-center items-center text-center">
                <img src="images/tabler-icon-eye.svg" class="w-10 h-5" />
                <p>${view}</p>
            </div>
        </div>
        `;
        readSection.append(div);
    });


    // card - 04 read section 
    let id4 = document.getElementById('seeBtn-104');
    id4.addEventListener('click', function(){
        const title = document.getElementById('title-104').innerText;
        const view = document.getElementById('view-104').innerText;

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex flex-row justify-between bg-[#e5dfdfb2] rounded-md p-3">
            <h3 class="text-lg font-medium text-black">${title}</h3>
            <div class="flex flex-row justify-center items-center text-center">
                <img src="images/tabler-icon-eye.svg" class="w-10 h-5" />
                <p>${view}</p>
            </div>
        </div>
        `;
        readSection.append(div);
    });


    // card - 05 read section 
    let id5 = document.getElementById('seeBtn-105');
    id5.addEventListener('click', function(){
        const title = document.getElementById('title-105').innerText;
        const view = document.getElementById('view-105').innerText;

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex flex-row justify-between bg-[#e5dfdfb2] rounded-md p-3">
            <h3 class="text-lg font-medium text-black">${title}</h3>
            <div class="flex flex-row justify-center items-center text-center">
                <img src="images/tabler-icon-eye.svg" class="w-10 h-5" />
                <p>${view}</p>
            </div>
        </div>
        `;
        readSection.append(div);
    });


    // card - 06 read section 
    let id6 = document.getElementById('seeBtn-106');
    id6.addEventListener('click', function(){
        const title = document.getElementById('title-106').innerText;
        const view = document.getElementById('view-106').innerText;

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex flex-row justify-between bg-[#e5dfdfb2] rounded-md p-3">
            <h3 class="text-lg font-medium text-black">${title}</h3>
            <div class="flex flex-row justify-center items-center text-center">
                <img src="images/tabler-icon-eye.svg" class="w-10 h-5" />
                <p>${view}</p>
            </div>
        </div>
        `;
        readSection.append(div);
    });
};

const postCardDiv = document.getElementById('postCardDiv');

const allPostDisplay = (data) => {

    data.posts.forEach(element => {
        // console.log(element);

        const div = document.createElement('div');
        // div.innerText = "Hello World";
        div.innerHTML = `
        <div class=" flex flex-row gap-10 rounded-xl p-5 bg-[#F3F3F5]">
            <div class="indicator w-[10%]">
                <span id="activeLight" class="indicator-item badge bg-[#ff3434] activeLight"></span>
                <div class=" grid h-16 w-16 place-items-center">
                    <img class="rounded-xl" src="${element.image}"/>
                </div>
            </div>
            <div class="w-[70%] space-y-3">
                <div class="flex flex-row gap-6">
                    <p class="text-base">#${element.category}</p>
                    <p class="text-base">Author : ${element.author.name}</p>
                </div>
                <div class="space-y-1">
                    <h2 id="title-${element.id}" class="text-2xl font-bold text-black">${element.title}</h2>
                    <p class="text-base text-[#12132D99]">${element.description}</p>
                </div>
                <div class="border-dashed border-[#12132D99] border-[1px] h-0.5 mt-2">
                    
                </div>
                <div class="flex flex-row justify-between">
                    <div class="flex flex-row gap-5">
                        <div class="flex flex-row gap-2">
                            <img src="images/tabler-icon-message-2.svg" class="" />
                            <p>${element.comment_count}</p>
                        </div>
                        <div class="flex flex-row gap-2">
                            <img src="images/tabler-icon-eye.svg" class="" />
                            <p id="view-${element.id}">${element.view_count}</p>
                        </div>
                        <div class="flex flex-row gap-2">
                            <img src="images/tabler-icon-clock-hour-9.svg" class="" />
                            <p>${element.posted_time}</p>
                        </div>
                    </div>
                    <div id='seeBtn-${element.id}' class="seeBtn">
                            <img src="images/email 1.svg"/>
                    </div>
                </div>
            </div>
        </div>
        `;

        postCardDiv.append(div);

    });
}

allPost();







const latest = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    // console.log(data);
    latestDisplay(data);
}

const latestDiv = document.getElementById('latestDiv');

const latestDisplay = (data) => {
    for (const element of data) {


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