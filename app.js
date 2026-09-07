/**
 * ATELIER NOIR — Interactive Gastronomy Tasting Experience Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Course Data
  const courseData = {
    hearth: [
      {
        num: 'I',
        name: 'Smoked Pine Broth & Crisp Birch Bark',
        desc: 'Infusion of roasted lichen, juniper berry oil, and wild foraged mountain thyme.',
        wine: '2022 Domaine de l’Écu ‘Orthogneiss’ Muscadet',
        botanical: 'Fermented Green Birch Sap & Roasted Pine Needle Shrub'
      },
      {
        num: 'II',
        name: 'Limfjord Oyster Charred in Beef Fat',
        desc: 'Glazed over live embers with beach herbs, gooseberry vinegar, and coastal sea kale.',
        wine: '2020 Stéphane Tissot ‘Patchwork’ Chardonnay, Jura',
        botanical: 'Clarified Green Gooseberry & Sparkling Saltwort Tonic'
      },
      {
        num: 'III',
        name: 'Ember-Baked Celeriac & Brown Butter Yeast',
        desc: 'Slow-roasted 6 hours in birch coals, whipped fermented cream, and hazelnut pollen.',
        wine: '2019 Jean-François Ganevat ‘Kopin’ Chenin/Chard',
        botanical: 'Caramelized Whey & Toasted Hazelnut Infusion'
      },
      {
        num: 'IV',
        name: 'Wood-Fired Danish Langoustine',
        desc: 'Split live over binchotan, brush-finished with fermented red currant tare.',
        wine: '2021 Gut Oggau ‘Theodora’ Grüner/Welschriesling',
        botanical: 'Cold-Pressed Sea Buckthorn & Smoked Wild Chamomile'
      },
      {
        num: 'V',
        name: '45-Day Dry Aged Dairy Cow Striploin',
        desc: 'Charred rib cap, glazed bone marrow reduction, black garlic emulsion, and wild chanterelles.',
        wine: '2018 Domaine Gramenon ‘La Sagesse’ Côtes du Rhône',
        botanical: 'Roasted Dandelion Root, Fermented Black Currant & Ember Tea'
      },
      {
        num: 'VI',
        name: 'Smoked Meadow Hay Granita',
        desc: 'Sorrel blossom snow, tart elderflower vinegar jelly, and spruce tip syrup.',
        wine: '2020 Frank Cornelissen ‘Munjebel’ Rosato, Etna',
        botanical: 'Distilled Douglas Fir & Tart Quince Kombucha'
      },
      {
        num: 'VII',
        name: 'Charred Sourdough Ice Cream',
        desc: 'Caramelized koji toffee, crispy bread crisps, and smoked sea salt from Læsø.',
        wine: '2017 Château d’Yquem Sauternes (Half-Glass Flight)',
        botanical: 'Smoked Barley Malt & Wild Heather Flower Elixir'
      }
    ],
    terroir: [
      {
        num: 'I',
        name: 'Smoked Pine Broth & Crisp Birch Bark',
        desc: 'Roasted lichen, juniper berry oil, and mountain thyme infusion.',
        wine: '2022 Domaine de l’Écu ‘Orthogneiss’',
        botanical: 'Fermented Birch Sap & Pine Needle Shrub'
      },
      {
        num: 'II',
        name: 'Cured Sea Urchin & Marrow Broth',
        desc: 'Faeroe Islands uni rested over warm tallow emulsion and preserved kelp.',
        wine: '2020 Jacques Selosse ‘Initial’ Blanc de Blancs',
        botanical: 'Sea Lettuce Sparkler & Cold Green Apple'
      },
      {
        num: 'III',
        name: 'Limfjord Oyster Charred in Beef Fat',
        desc: 'Ember-charred with beach herbs and gooseberry vinegar.',
        wine: '2020 Stéphane Tissot ‘Patchwork’ Chardonnay',
        botanical: 'Clarified Gooseberry & Saltwort Tonic'
      },
      {
        num: 'IV',
        name: 'Fjord Trout Cured in Pine Needles',
        desc: 'Cold-smoked with applewood branches, pickled wild ramps, and cultured buttermilk.',
        wine: '2021 Claus Preisinger ‘Kalkundkiesel’ Weiss',
        botanical: 'Cucumber Distillate & Foraged Wood Sorrel'
      },
      {
        num: 'V',
        name: 'Ember-Baked Celeriac & Brown Butter Yeast',
        desc: '6-hour coal roast, whipped fermented cream, and hazelnut pollen.',
        wine: '2019 Jean-François Ganevat ‘Kopin’',
        botanical: 'Caramelized Whey & Hazelnut Infusion'
      },
      {
        num: 'VI',
        name: 'Wood-Fired Danish Langoustine',
        desc: 'Binchotan seared, fermented red currant tare glaze.',
        wine: '2021 Gut Oggau ‘Theodora’',
        botanical: 'Sea Buckthorn & Smoked Chamomile'
      },
      {
        num: 'VII',
        name: 'Braised Morel Mushrooms in Roasted Duck Fat',
        desc: 'Glazed with black truffle garum and crisp sunchoke scales.',
        wine: '2017 Domaine Dujac Morey-Saint-Denis 1er Cru',
        botanical: 'Roasted Porcini Broth & Wild Lingonberry'
      },
      {
        num: 'VIII',
        name: '45-Day Dry Aged Dairy Cow Striploin',
        desc: 'Charred rib cap, bone marrow reduction, black garlic and chanterelles.',
        wine: '2018 Domaine Gramenon ‘La Sagesse’',
        botanical: 'Dandelion Root, Black Currant & Ember Tea'
      },
      {
        num: 'IX',
        name: 'Aged Raw Milk Cheese with Heather Honeycomb',
        desc: '24-month Thybo cheese, warm rye wafer, and wild heather honeycomb.',
        wine: '2015 Vin Jaune Domaine Macle, Château-Chalon',
        botanical: 'Fermented Pear & Meadowsweet Nectar'
      },
      {
        num: 'X',
        name: 'Smoked Meadow Hay Granita',
        desc: 'Sorrel blossom snow and tart elderflower vinegar jelly.',
        wine: '2020 Frank Cornelissen ‘Munjebel’ Rosato',
        botanical: 'Douglas Fir & Quince Kombucha'
      },
      {
        num: 'XI',
        name: 'Charred Sourdough Ice Cream & Smoked Salt',
        desc: 'Caramelized koji toffee, crispy sourdough crisps, and smoked Læsø salt.',
        wine: '2017 Château d’Yquem Sauternes',
        botanical: 'Smoked Barley Malt & Heather Flower Elixir'
      }
    ]
  };

  // State
  let activeExp = 'hearth';
  let activePairing = 'wine';

  // Elements
  const coursesList = document.getElementById('coursesList');
  const totalPerGuest = document.getElementById('totalPerGuest');
  const menuButtons = document.querySelectorAll('#menuToggleGroup .menu-btn');
  const pairingButtons = document.querySelectorAll('#pairingSelector .p-btn');

  function renderCourses() {
    const list = courseData[activeExp];
    coursesList.innerHTML = '';

    list.forEach(c => {
      const item = document.createElement('div');
      item.className = 'course-item';

      const pairingText = activePairing === 'wine' ? c.wine : c.botanical;
      const pairingLabel = activePairing === 'wine' ? 'Wine Pairing:' : 'Botanical Flight:';

      item.innerHTML = `
        <div class="course-left">
          <span class="c-num">${c.num}</span>
          <div class="c-desc">
            <h4>${c.name}</h4>
            <p>${c.desc}</p>
          </div>
        </div>
        <div class="course-pairing">
          <span>${pairingLabel}</span> ${pairingText}
        </div>
      `;
      coursesList.appendChild(item);
    });

    // Update Price
    const basePrice = activeExp === 'hearth' ? 1650 : 2450;
    const pairingPrice = activePairing === 'wine' ? 1100 : 650;
    const total = basePrice + pairingPrice;
    totalPerGuest.textContent = `DKK ${total.toLocaleString()}`;
  }

  menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      menuButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeExp = btn.dataset.exp;
      renderCourses();
    });
  });

  pairingButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      pairingButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activePairing = btn.dataset.pairing;
      renderCourses();
    });
  });

  // Modal Functionality
  const reservationModal = document.getElementById('reservationModal');
  const navReserveBtn = document.getElementById('navReserveBtn');
  const heroReserveBtn = document.getElementById('heroReserveBtn');
  const drawerReserveBtn = document.getElementById('drawerReserveBtn');
  const menuBookBtn = document.getElementById('menuBookBtn');
  const closeReserveBtn = document.getElementById('closeReserveBtn');
  const reservationForm = document.getElementById('reservationForm');
  const bookingReceipt = document.getElementById('bookingReceipt');

  const openModal = () => {
    reservationModal.classList.add('active');
    reservationModal.setAttribute('aria-hidden', 'false');
  };

  const closeModal = () => {
    reservationModal.classList.remove('active');
    reservationModal.setAttribute('aria-hidden', 'true');
  };

  if (navReserveBtn) navReserveBtn.addEventListener('click', openModal);
  if (heroReserveBtn) heroReserveBtn.addEventListener('click', openModal);
  if (drawerReserveBtn) drawerReserveBtn.addEventListener('click', openModal);
  if (menuBookBtn) menuBookBtn.addEventListener('click', openModal);
  if (closeReserveBtn) closeReserveBtn.addEventListener('click', closeModal);

  reservationModal.addEventListener('click', (e) => {
    if (e.target === reservationModal) closeModal();
  });

  reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const passCode = Math.floor(1000 + Math.random() * 9000);
    bookingReceipt.innerHTML = `<strong>✓ Hearth Reservation Confirmed</strong><p>Pass #NOIR-2026-${passCode}. A private confirmation dispatch has been sent with cellar notes and arrival directions.</p>`;
    bookingReceipt.style.display = 'block';

    setTimeout(() => {
      bookingReceipt.style.display = 'none';
      closeModal();
      reservationForm.reset();
    }, 3200);
  });

  // Mobile Drawer
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  mobileMenuBtn.addEventListener('click', () => {
    mobileDrawer.classList.toggle('open');
  });

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  });

  // Initial render
  renderCourses();
});
