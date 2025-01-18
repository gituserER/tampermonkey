if (!/https:\/\/itorrents-igruha\.org\/.*\.html$/.test(location.href)) return;
document.querySelectorAll('a[href*="/?do=download&id="]').forEach(link => {
      link.href = link.href.replace('/?do=download&id=', '/engine/download.php?id=');
  });
