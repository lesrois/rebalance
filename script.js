// 샘플 매물 데이터
const listings = [
  { id: 1, name: "강남구 역삼동 재건축 아파트", location: "서울 강남구 역삼동", price: "2억 5,000만원", rent: "가능", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", status: "진행중" },
  { id: 2, name: "노원구 상계동 재개발 빌라", location: "서울 노원구 상계동", price: "1억 2,000만원", rent: "불가", image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", status: "진행중" },
  { id: 3, name: "부산 해운대구 재건축 오피스텔", location: "부산 해운대구", price: "1억 8,000만원", rent: "가능", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80", status: "분양예정" },
  { id: 4, name: "이문1구역 재개발", location: "서울 동대문구 이문동", price: "1억 5,000만원", rent: "가능", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80", status: "조합설립" },
  { id: 5, name: "광명뉴타운 재건축", location: "경기 광명시", price: "2억 2,000만원", rent: "불가", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", status: "관리처분인가" },
  { id: 6, name: "인천 부평구 재개발", location: "인천 부평구", price: "1억 7,000만원", rent: "가능", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80", status: "사업시행인가" },
  { id: 7, name: "수원 권선구 재건축", location: "경기 수원시 권선구", price: "2억 8,000만원", rent: "불가", image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=400&q=80", status: "착공" },
  { id: 8, name: "대구 수성구 재개발", location: "대구 수성구", price: "1억 9,000만원", rent: "가능", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80", status: "준공" },
  { id: 9, name: "용산구 한남동 재건축", location: "서울 용산구 한남동", price: "3억 1,000만원", rent: "불가", image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", status: "관리처분인가" },
  { id: 10, name: "마포구 공덕동 재개발", location: "서울 마포구 공덕동", price: "2억 3,000만원", rent: "가능", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", status: "조합설립" },
  { id: 11, name: "송파구 잠실동 재건축", location: "서울 송파구 잠실동", price: "3억 5,000만원", rent: "가능", image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80", status: "진행중" },
  { id: 12, name: "강동구 천호동 재개발", location: "서울 강동구 천호동", price: "1억 8,000만원", rent: "불가", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", status: "조합설립" },
  { id: 13, name: "성동구 성수동 재건축", location: "서울 성동구 성수동", price: "2억 7,000만원", rent: "가능", image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", status: "사업시행인가" },
  { id: 14, name: "영등포구 여의도동 재개발", location: "서울 영등포구 여의도동", price: "2억 9,000만원", rent: "불가", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80", status: "준공" },
  { id: 15, name: "서초구 반포동 재건축", location: "서울 서초구 반포동", price: "3억 2,000만원", rent: "가능", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80", status: "진행중" },
  { id: 16, name: "동작구 사당동 재개발", location: "서울 동작구 사당동", price: "1억 6,000만원", rent: "불가", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", status: "조합설립" },
  { id: 17, name: "광진구 구의동 재건축", location: "서울 광진구 구의동", price: "2억 4,000만원", rent: "가능", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80", status: "관리처분인가" },
  { id: 18, name: "중랑구 면목동 재개발", location: "서울 중랑구 면목동", price: "1억 3,000만원", rent: "불가", image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=400&q=80", status: "사업시행인가" },
  { id: 19, name: "구로구 구로동 재건축", location: "서울 구로구 구로동", price: "2억 1,000만원", rent: "가능", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80", status: "준공" },
  { id: 20, name: "은평구 불광동 재개발", location: "서울 은평구 불광동", price: "1억 4,000만원", rent: "불가", image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", status: "조합설립" }
];

// 매물 카드 렌더링
function renderListings(filteredListings = listings) {
  const container = document.getElementById('listingCards');
  container.innerHTML = '';
  if (filteredListings.length === 0) {
    container.innerHTML = '<div>검색 결과가 없습니다.</div>';
    return;
  }
  filteredListings.forEach(item => {
    const card = document.createElement('div');
    card.className = 'listing-card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="listing-info"><strong>매물명:</strong> ${item.name}</div>
      <div class="listing-info"><strong>위치:</strong> ${item.location}</div>
      <div class="listing-info"><strong>투자금:</strong> ${item.price}</div>
      <div class="listing-info"><strong>임대:</strong> ${item.rent}</div>
      <div class="listing-info"><strong>현황:</strong> ${item.status}</div>
    `;
    card.style.cursor = 'pointer';
    card.onclick = () => {
      window.location.href = `property${item.id}.html`;
    };
    container.appendChild(card);
  });
}

// 검색 기능
function searchListings() {
  const keyword = document.getElementById('searchInput').value.trim();
  if (!keyword) {
    renderListings();
    return;
  }
  const filtered = listings.filter(item =>
    item.name.includes(keyword) ||
    item.location.includes(keyword) ||
    item.price.includes(keyword) ||
    item.rent.includes(keyword) ||
    item.status.includes(keyword)
  );
  renderListings(filtered);
}

// 문의 폼 처리
// 지도용 샘플 구역 데이터
const mapAreas = [
  {
    name: "역삼동 재건축",
    lat: 37.500613,
    lng: 127.036431,
    stage: "조합설립",
    risk: "낮음",
    premium: "2억~2.5억",
    fee: "1.2억~1.5억",
    loan: "가능"
  },
  {
    name: "상계동 재개발",
    lat: 37.660882,
    lng: 127.066442,
    stage: "사업시행인가",
    risk: "중간",
    premium: "1억~1.3억",
    fee: "0.7억~1억",
    loan: "불가"
  },
  {
    name: "해운대구 재건축",
    lat: 35.163172,
    lng: 129.163543,
    stage: "준공",
    risk: "높음",
    premium: "1.8억~2.1억",
    fee: "1.1억~1.4억",
    loan: "가능"
  }
];

let map, markers = [];

function initMap() {
  map = L.map('map').setView([37.5, 127], 7.2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  renderMarkers();
}

function renderMarkers(stage = 'all') {
  // 기존 마커 제거
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  mapAreas.forEach(area => {
    if (stage !== 'all' && area.stage !== stage) return;
    const marker = L.marker([area.lat, area.lng]).addTo(map);

    // 마우스 오버시 팝업 표시
    marker.bindPopup(`
      <div>
        <div class="popup-label">${area.name}</div>
        <div><span class="popup-label">사업단계:</span><span class="popup-value">${area.stage}</span></div>
        <div><span class="popup-label">투자 위험도:</span><span class="popup-value">${area.risk}</span></div>
        <div><span class="popup-label">프리미엄:</span><span class="popup-value">${area.premium}</span></div>
        <div><span class="popup-label">분담금 추정:</span><span class="popup-value">${area.fee}</span></div>
        <div><span class="popup-label">대출 가능:</span><span class="popup-value">${area.loan}</span></div>
      </div>
    `);

    // 마우스 오버시 팝업 오픈
    marker.on('mouseover', function(e) { this.openPopup(); });
    marker.on('mouseout', function(e) { this.closePopup(); });

    markers.push(marker);
  });
}

function filterMarkers() {
  const stage = document.getElementById('stageFilter').value;
  renderMarkers(stage);
}

// DOMContentLoaded에 지도 초기화
document.addEventListener('DOMContentLoaded', () => {
  renderListings();

  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('contactMsg').textContent = "문의가 정상적으로 접수되었습니다. 감사합니다!";
    this.reset();
  });

  if (document.getElementById('map')) {
    initMap();
    document.getElementById('stageFilter').addEventListener('change', filterMarkers);
  }
}); 