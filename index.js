let facilityData = "";

const facilityObj = {
    facility: [
        { name: "Grand Lobby", text: "Ensure Your Comfort", img: "https://neenonoodlebowl.com/wp-content/uploads/2021/04/screenshotter-netflix-hoteldellunas1e2episode2-7416.png?w=1568" },

        { name: "Transportation", text: "Don't worry about your transportation", img: "https://i.pinimg.com/736x/c8/18/10/c81810309864600cc9ea1e230bf74aa7.jpg" },
    
        { name: "Rooms", text: "Only the best and most exquisite rooms", img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/301213948.jpg?k=1fd32173f29f46470640bb17f9d3fd312dea8b23f31d592b77b0b27f78c9f115&o=&hp=1" },
    
        { name: "Buffets", text: "Luxury cafe's and buffets", img: "https://www.hallyusg.net/wp-content/uploads/2019/07/hdl3-e1563863476250.jpeg" }
    ]
}

facilityObj.facility.forEach(item => {

    facilityData += "<h3>" + item.name + "</h3>"
    facilityData += "<p>" + item.text + "</p>"
    facilityData += "<img class='facilityImage' src='" + item.img + "' alt='" + item.name + "' />";
});


document.getElementById("facilityCard").innerHTML = facilityData;