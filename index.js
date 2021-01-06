const BASE_64 = 'data:image/png;base64,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'

const styleElement = document.createElement('style');
document.head.appendChild(styleElement)

function style(node, values) {
  let pseudos = [];
  for (const key in values) {
    const value = values[key]
    if (key.startsWith(':')) {
      const selector = `${node.tagName}-${pseudos.length}`
      node.classList.add(selector)
      let definition = []
      for (const key in value) {
        definition.push(`${key}: ${value[key]} !important;`)
      }
      const rule = `.${selector}${key} {${definition.join(';')}}`
      pseudos.push(rule)
    } else {
      node.style[key] = value;
    }
  }

  console.log(pseudos)
  if (pseudos.length > 0) {
    pseudos.forEach(pseudo => styleElement.sheet.insertRule(pseudo))
  }
}

const img = document.createElement('img');
style(img, {
  display: 'block',
  width: '20px',
})

img.src = BASE_64


const query = document.getElementById('search_form_input').value

const link = document.createElement('a')
link.href = `https://www.google.com/search?q=${query}`
style(link, {
  filter: 'grayscale(100%)',
  padding: '12px',
  transition: 'filter 0.2s ease-in-out',
  ':hover': {
    filter: 'grayscale(0%)',
  }
})
link.appendChild(img)


const form = document.forms.search_form
form.style.flex = '1';

const header = form.parentNode
style(header, {
  display: 'flex',
  alignItems: 'center',
})
header.appendChild(link)
