export function setTitle(route) {
  let title = '';
  if (route?.meta?.title) {
    if (route.params.id) {
      title = route.meta.title.replace(':id', route.params.id);
    } else {
      title = route.meta.title;
    }
    document.title = `${title} - Martha Novak`;
  } else {
    document.title = 'Martha Novak';
  }
}
