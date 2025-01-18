document.querySelectorAll('a[href*="/?do=download&id="]').forEach(link => {
      link.href = link.href.replace('/?do=download&id=', '/engine/download.php?id=');
  });
