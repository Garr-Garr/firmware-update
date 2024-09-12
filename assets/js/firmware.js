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
    v4bm: "/assets/hex/m2/00_M2Marlin-11-30-2015.hex",
    v4v1: "/assets/hex/m2/01_M2_LCD_Firmware_24Vw24Vheater.hex",
    v4v2: "",
    v4gt: "/assets/hex/m2/03_M2_Marlin-Geeetech-LCD-Black-Z-Motor.hex",
    v4dbm: "/assets/hex/m2/04_M2_Dual_Extruder_Marlin_Black_Z_Motor.hex",
    v4dv1: "",
    v4dv2: "",
    v4dgt: "",
    v3bbm: "/assets/hex/m2/08_M2Marlin-11-30-2015.hex",
    v3bv1: "/assets/hex/m2/09_M2_LCD_Firmware_24Vw24Vheater.hex",
    v3bv2: "",
    v3bgt: "",
    sv3bbm: "/assets/hex/m2/12_M2Marlin24r2.hex",
    sv3bv1: "/assets/hex/m2/13_M2_LCD_Firmware_942013.hex",
    sv3bv2: "",
    sv3bgt: "/assets/hex/m2/15_M2_Marlin_RRDSC.hex",
    sv4bm: "/assets/hex/m2/16_M2Marlin-01-14-2016-OriginalZMotor.hex",
    sv4v1: "/assets/hex/m2/17_M2_LCD_Firmware_24Vw24Vheater.hex",
    sv4v2: "",
    sv4gt: "/assets/hex/m2/19_M2_Marlin_RRDSC.hex",
    sv4dbm: "/assets/hex/m2/20_M2_Dual_Extruder_Marlin.hex",
    sv4dv1: "",
    sv4dv2: "",
    sv4dgt: "",
    revEbm: "/assets/hex/m2/24_M2E-Production-SnNRd-V100.hex",
    revEv1: "",
    revEv2: "",
    revEgt: "/assets/hex/m2/27_M2E-Production-SnNRd-V100.hex",
    revEdbm: "/assets/hex/m2/28_M2E-Production-SnNRd-V101-Dual.hex",
    revEdv1: "",
    revEdv2: "",
    revEdgt: "/assets/hex/m2/31_M2E-Production-SnNRd-V101-Dual.hex",
    bv4dbm: "/assets/hex/m2/34_M2_Dual_Extruder_Marlin_Black_Z_Motor.hex",
    bv4dv1: "",
    bv4dv2: "",
    bv4dgt: "",
    sv4Zm: "/assets/hex/m2/32_M2E-Production-SnNRd-V100_SilverZ.hex",
    bv3bgt:"",
    revEdSz: "/assets/hex/m2/38_M2E-Production-SnNRd-V101_Silver_Z-Dual.hex",
    revEdSzMin:"/assets/hex/m2/39_M2E-Production-SnNRd-V101_Dual_silver.hex",
    svv4zmxgt:"/assets/hex/m2/40_M2E-Production-SnNRd-V100_SilverZ.hex",
    sv4zmxv1: "/assets/hex/m2/41_silver-v4-Zmax-viki1.hex",
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
      { id: "revH", event: () => downloadFirmware("revH") }
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
      revE: "/assets/hex/m2/Stock/M2_Rev_e.hex",
      revEdual: "/assets/hex/m2/Stock/M2_Rev_e_dual.hex",
      revF: "/assets/hex/m2/Stock/M2_Rev_f.hex",
      revG: "/assets/hex/m2/Stock/M2_Rev_g.hex",
      revH: "/assets/hex/m2/Stock/M2_Rev_h.hex"
    };
  
    if (await confirm(`Please click to download ${type.toUpperCase()} firmware.`)) {
      window.location = urls[type];
    }
  };
  const downloadPrusaSlicer = async () => {
    if (await confirm("Please click to download PrusaSlicer\r\r")) {
      window.location = "https://www.prusa3d.com/page/prusaslicer_424/";
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
  
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const scrollNav = document.getElementById('scrollNav');
  const offcanvasNav = document.getElementById('offcanvasNav');
  
  var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
  var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl)
  });

  window.addEventListener('scroll', function() {
    if (window.scrollY > header.offsetHeight) {
      scrollNav.style.display = 'block';
    } else {
      scrollNav.style.display = 'none';
    }
  });

  // Create a Bootstrap Offcanvas instance
  const bsOffcanvas = new bootstrap.Offcanvas(offcanvasNav);

  // Function to reset body styles and classes
  function resetBodyScroll() {
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  // Event listener for when the offcanvas is hidden
  offcanvasNav.addEventListener('hidden.bs.offcanvas', function () {
    resetBodyScroll();
  });

  // Event listener for when the offcanvas is about to be hidden
  offcanvasNav.addEventListener('hide.bs.offcanvas', function () {
    // Remove the backdrop immediately
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) {
      backdrop.remove();
    }
  });

  // Event delegation for closing the offcanvas when clicking outside
  document.body.addEventListener('click', function(event) {
    if (!offcanvasNav.contains(event.target) && !event.target.closest('.scroll-nav')) {
      bsOffcanvas.hide();
    }
  });

  // Fallback to ensure scrolling is reset even if the hidden event doesn't fire
  window.addEventListener('resize', function() {
    if (!offcanvasNav.classList.contains('show')) {
      resetBodyScroll();
    }
  });
});
//   // Image magnification (using a library, make sure to include the library in your HTML)
//   document.addEventListener('DOMContentLoaded', () => {
//     $(".zoom1").elevateZoom({ zoomWindowPosition: 10 });
//     $(".zoom2").elevateZoom({ zoomWindowPosition: 2 });
//   });