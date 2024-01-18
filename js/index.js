function mockDb() {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        "google.com, pub-8572040456674904, RESELLER",
        "rubiconproject.com, 16114, RESELLER, 0bfd66d529a55807",
        "districtm.io, 101760, RESELLER, 3fd707be9c4527c3",
        "openx.com, 537149888, RESELLER, 6a698e2ec38604c6",
        "xad.com, 958, RESELLER, 81cbf0a75a5e0e9a",
        "loopme.com, 5679, RESELLER, 6c8d5f95897a5a3b",
      ]);
    }, 200);
  });
}

function mockFetch() {
  return new Promise((res) => {
    setTimeout(() => {
      res(`yoc.com, 5503, DIRECT
google.com, pub-8572040456674904, RESELLER
smartadserver.com, 1363, RESELLER
smartadserver.com, 3920, RESELLER
appnexus.com, 11853, RESELLER, f5ab79cb980f11d1
contextweb.com, 560288, RESELLER, 89ff185a4c4e857c
pubmatic.com, 156439, RESELLER, 5d62403b186f2ace
pubmatic.com, 154037, RESELLER, 5d62403b186f2ace
rubiconproject.com, 16114, RESELLER, 0bfd66d529a55807
appnexus.com, 3703, RESELLER, f5ab79cb980f11d1
districtm.io, 101760, RESELLER, 3fd707be9c4527c3
rhythmone.com, 2564526802, RESELLER, a670c89d4a324e47`);
    }, 300);
  });
}
