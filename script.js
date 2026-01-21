function startWork() {
  document.getElementById("home-screen").style.display = "none";
  document.getElementById("work-screen").style.display = "block";
  document.getElementById("status").innerText = "Status: Working";
}

function stopWork() {
  document.getElementById("status").innerText = "Status: Stopped";
}

// Redirect to separate pages, only after stopping
function goToRoutes() {
  if(document.getElementById("status").innerText === "Status: Stopped") {
    location.href = "routes.html";
  } else {
    alert("Stop the work first!");
  }
}

function goToSales() {
  if(document.getElementById("status").innerText === "Status: Stopped") {
    location.href = "sales.html";
  } else {
    alert("Stop the work first!");
  }
}

function goToOrders() {
  if(document.getElementById("status").innerText === "Status: Stopped") {
    location.href = "orders.html";
  } else {
    alert("Stop the work first!");
  }
}

function goToQuality() {
  if(document.getElementById("status").innerText === "Status: Stopped") {
    location.href = "quality.html";
  } else {
    alert("Stop the work first!");
  }
}
