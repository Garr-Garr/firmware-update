// Constants for firmware configurations
const FIRMWARE_CONFIGS = {
    //24v Black Z motor (Rev c and D)
    //V4 (single)section:
    v4bm: [0, 0, 1, 0, 0],
    v4v1: [0, 0, 1, 0, 1],
    v4v2: [0, 0, 1, 0, 2],
    v4gt: [0, 0, 1, 0, 3],
    
    //V4 dual section:
    v4dbm: [0, 0, 1, 1, 0], //V4 Dual Base Model
    v4dv1: [0, 0, 1, 1, 1], //Viki1 not supported
    v4dv2: [0, 0, 1, 1, 2], //Viki2 not supported
    v4dgt: [0, 0, 1, 1, 3], // Geetech not supported

    //V3b Section:
    v3bbm: [0, 0, 0, 2, 0], //Base model
    v3bv1: [0, 0, 0, 2, 1], //Viki1
    v3bv2: [0, 0, 0, 2, 2], //Viki2
    v3bgt: [0, 0, 0, 2, 3], //Geetech

    // Silver v3b Section:
    sv3bbm: [1, 0, 1, 2, 0], //Base Mode
    sv3bv1: [1, 0, 1, 2, 1], //Viki1
    sv3bv2: [1, 0, 1, 2, 2], //Viki2
    sv3bgt: [1, 0, 1, 2, 3], //Geetech

    // Silver v4 Section:
    sv4bm: [1, 0, 1, 0, 0], //Base Mode
    sv4v1: [1, 0, 1, 0, 1], //Viki1
    sv4v2: [1, 0, 1, 0, 2], //Viki2
    sv4gt: [1, 0, 1, 0, 3], //Geetech

    // v4 Dual Section:
    sv4dbm: [1, 0, 1, 1, 0], //Base Model
    sv4dv1: [1, 0, 1, 1, 1], //Viki1 not supported
    sv4dv2: [1, 0, 1, 1, 2], //Viki2 not supported
    sv4dgt: [1, 0, 1, 1, 3], //Geetech not supported

    // Rev.E Section:
    revEbm: [0, 0, 0, 0, 0], //Rev.E Base Model
    revEv1: [0, 0, 0, 0, 1], //Viki1
    revEv2: [0, 0, 0, 0, 2], //Viki2
    revEgt: [0, 0, 0, 0, 3], //Geetech

    // Rev.E Dual Section:
    revEdbm: [0, 0, 0, 1, 0], //Rev.E Dual Base Model
    revEdv1: [0, 0, 0, 1, 1], //Viki1
    revEdv2: [0, 0, 0, 1, 2], //Viki2
    revEdgt: [0, 0, 0, 1, 3], //Geetech

    // Black v4 Section:
    bv4dbm: [0, 0, 1, 1, 0], //Base Model
    bv4dv1: [0, 0, 1, 1, 1], //Viki1 not supported
    bv4dv2: [0, 0, 1, 1, 2], //Viki2 not supported
    bv4dgt: [0, 0, 1, 1, 3], //Geetech not supported

    // Non Standard Configurations
    sv4Zm: [1, 0, 0, 0, 0], //Silver,V4,Zmax
    bv3bgt: [0, 0, 1, 2, 3], //Black,V3b,Geetech
    revEdSz: [1, 0, 0, 1, 0], //revE dual silver Z
    revEdSzMin: [1, 0, 1, 1, 3], //revE dual silver Z min
    svv4zmxgt: [1, 0, 0, 0, 3], //revE Silver.V4,Zmax Geeetech
    sv4zmxv1: [1, 0, 0, 0, 1], //silver v4 zmax viki 1


  };
  
  const FIRMWARE_URLS = {
    v4bm: "blob:https://github.com/2a010b44-d033-4745-b2f0-d330813972cb",
    v4v1: "http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2_LCD_Firmware_24Vw24Vheater.zip",
    v4v2: "",
    v4gt: "",
    v4dbm: "",
    v4dv1: "",
    v4dv2: "",
    v4dgt: "",
    v3bbm: "",
    v3bv1: "",
    v3bv2: "",
    v3bgt: "",
    sv3bbm: "",
    sv3bv1: "",
    sv3bv2: "",
    sv3bgt: "",
    sv4bm: "",
    sv4v1: "",
    sv4v2: "",
    sv4gt: "",
    sv4dbm: "",
    sv4dv1: "",
    sv4dv2: "",
    sv4dgt: "",
    revEbm: "",
    revEv1: "",
    revEv2: "",
    revEgt: "",
    revEdbm: "",
    revEdv1: "",
    revEdv2: "",
    revEdgt: "",
    bv4dbm: "",
    bv4dv1: "",
    bv4dv2: "",
    bv4dgt: "",
    sv4Zm: "",
    bv3bgt:"",
    revEdSz: "",
    revEdSzMin:"",
    svv4zmxgt:"",
    sv4zmxv1: "",
  };
  
  let userSelections = {};

  // Event listener setup
  document.addEventListener('DOMContentLoaded', () => {
    const elements = [
      { id: "ard1", event: downloadArduino },
      { id: "ard2", event: downloadArduino },
      { id: "ard3", event: downloadArduino },
      { id: "revE", event: () => downloadFirmware("revE") },
      { id: "revEdual", event: () => downloadFirmware("revEdual") },
      { id: "revF", event: () => downloadFirmware("revF") },
      { id: "revG", event: () => downloadFirmware("revG") },
      { id: "revH", event: () => downloadFirmware("revH") },
      { id: "v4f/g", event: () => downloadFirmware("v4fg") }
    ];
  
    elements.forEach(({ id, event }) => {
      document.getElementById(id)?.addEventListener("click", event);
    });
    
    // New firmware selector functionality
  const selectorSteps = document.querySelectorAll('.selector-step');
  const prevButton = document.getElementById('prev-step');
  const nextButton = document.getElementById('next-step');
  const progressBar = document.getElementById('progress-bar');
  const totalSteps = selectorSteps.length;
  let currentStep = 0;

  //const userSelections = {};

  function updateProgressBar(stepIndex) {
    const progress = ((stepIndex + 1) / totalSteps) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress);
    progressBar.textContent = `Step ${stepIndex + 1} of ${totalSteps}`;
  }

  function showStep(stepIndex) {
    selectorSteps.forEach((step, index) => {
      step.style.display = index === stepIndex ? 'block' : 'none';
    });
    prevButton.style.display = stepIndex > 0 ? 'inline-block' : 'none';
    nextButton.textContent = stepIndex === selectorSteps.length - 1 ? 'Finish' : 'Next →';
    currentStep = stepIndex;
    updateProgressBar(stepIndex);
  }

  function handleSelection(event) {
    if (event.target.matches('button[data-value]')) {
      const step = event.target.closest('.selector-step');
      const stepId = step.id;
      const value = event.target.dataset.value;
      userSelections[stepId] = value;

      // Highlight selected button
      step.querySelectorAll('button').forEach(btn => btn.classList.remove('btn-primary'));
      event.target.classList.add('btn-primary');

      if (currentStep < selectorSteps.length - 1) {
        showStep(currentStep + 1);
      }
    }
  }

  function handleNavigation(event) {
    if (event.target === prevButton && currentStep > 0) {
      showStep(currentStep - 1);
    } else if (event.target === nextButton) {
      if (currentStep < selectorSteps.length - 1) {
        showStep(currentStep + 1);
      } else {
        // Finish button clicked
        console.log('User selections:', userSelections);
        matchConfig();
      }
    }
  }

  // Set up event listeners for the new selector
  const firmwareSelector = document.getElementById('firmware-selector');
  if (firmwareSelector) {
    firmwareSelector.addEventListener('click', handleSelection);
    prevButton?.addEventListener('click', handleNavigation);
    nextButton?.addEventListener('click', handleNavigation);

    // Initialize image zoom functionality
    const zoomableImages = document.querySelectorAll('img[data-zoomed]');
    zoomableImages.forEach(img => {
      img.addEventListener('click', () => {
        const zoomedSrc = img.dataset.zoomed;
        // Implement your preferred zoom functionality here
        console.log('Zoom image:', zoomedSrc);
      });
    });

    // Show the first step
    showStep(0);
  }
});
  
  // Download functions
  // TODO: fix links 
  const downloadFirmware = async (type) => {
    const urls = {
      revE: "http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V100.zip",
      revEdual: "http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V101%20-%20Dual.zip",
      revF: "https://github.com/MakerGear/m2firmware/archive/AQB3f.zip",
      revG: "http://makergear.wikidot.com/local--files/m2-firmware/m2-RevG-firmware.zip",
      revH: "https://github.com/MakerGear/m2firmware/archive/vm4jL.zip",
      v4fg: "http://makergear.wikidot.com/local--files/m2-firmware/V4-RevF%3AG%20-upgrade.zip"
    };
  
    if (await confirm(`Please click to download ${type.toUpperCase()} firmware.`)) {
      window.location = urls[type];
    }
  };
  
  const downloadArduino = async () => {
    if (await confirm("Please click to download Arduino 1.5.5.\r\nContributions are voluntary")) {
      window.location = "https://www.arduino.cc/en/Main/OldSoftwareReleases#1.5.x";
    }
  };
  
  // Firmware selection logic
  let step = 1;
  
  const move = (direction) => {
    if (!direction) {
      console.log("Move function called without direction");
      return;
    }
  
    if (direction === "forward" && step <= 5) {
      step++;
      if (step <= 5) {
        document.getElementById(step).style.display = "block";
        document.getElementById(step - 1).style.display = "none";
      } else {
        matchConfig();
        step = 5;
      }
    } else if (direction === "back" && step > 1) {
      step--;
      document.getElementById(step).style.display = "block";
      document.getElementById(step + 1).style.display = "none";
    }
  
    console.log(step);
  };
  
  
// Updated matchConfig function
const matchConfig = () => {
    const getUserConfig = () => {
      return [
        userSelections['step-1'] === 'silver' ? 1 : 0,
        0, // Assuming 24V power supply
        userSelections['step-3'] === 'zmin' ? 1 : 0,
        userSelections['step-4'] === 'v4' ? 0 : userSelections['step-4'] === 'v4dual' ? 1 : 2,
        userSelections['step-5'] === 'none' ? 0 : userSelections['step-5'] === 'viki1' ? 1 : userSelections['step-5'] === 'viki2' ? 2 : 3
      ];
    };
  
    const userConfig = getUserConfig();
    const match = Object.entries(FIRMWARE_CONFIGS).find(([_, config]) => 
      config.every((value, index) => value === userConfig[index])
    );
  
    if (match) {
      const [configName] = match;
      const firmwareUrl = FIRMWARE_URLS[configName];
      console.log(configName)
      if (firmwareUrl) {
        confirm("Please click to download your firmware.") && (window.location = firmwareUrl);
      } else {
        alert("We can't find your firmware. Please contact support.makergear.com for assistance.\n configName: " + configName);
      }
    } else {
      alert("No matching firmware configuration found. Please contact support for assistance.");
    }
  };
  
  // Helper function for async confirm dialogs
  const confirm = (message) => {
    return new Promise(resolve => {
      window.confirm(message) ? resolve(true) : resolve(false);
    });
  };

  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
  
//   // Image magnification (using a library, make sure to include the library in your HTML)
//   document.addEventListener('DOMContentLoaded', () => {
//     $(".zoom1").elevateZoom({ zoomWindowPosition: 10 });
//     $(".zoom2").elevateZoom({ zoomWindowPosition: 2 });
//   });