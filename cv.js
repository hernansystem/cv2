const telefono = document.querySelector('.telefono');

telefono.addEventListener('mouseover', () => {
  telefono.classList.add('brillo');
});

telefono.addEventListener('mouseout', () => {
  telefono.classList.remove('brillo');
});

const iconoTelefono = document.querySelector('.fa-phone');

iconoTelefono.addEventListener('mouseover', () => {
  telefono.querySelector('.brillo').classList.add('brillo');
});

iconoTelefono.addEventListener('mouseout', () => {
  telefono.querySelector('.brillo').classList.remove('brillo');
});

document.addEventListener('DOMContentLoaded', () => {
  const telefono = document.querySelector('.telefono');
  const iconoTelefono = document.querySelector('.fa-phone');

  telefono.addEventListener('mouseover', () => {
    telefono.querySelector('.brillo').classList.add('brillo');
  });

  telefono.addEventListener('mouseout', () => {
    telefono.querySelector('.brillo').classList.remove('brillo');
  });

  iconoTelefono.addEventListener('mouseover', () => {
    telefono.querySelector('.brillo').classList.add('brillo');
  });

  iconoTelefono.addEventListener('mouseout', () => {
    telefono.querySelector('.brillo').classList.remove('brillo');
  });
});
