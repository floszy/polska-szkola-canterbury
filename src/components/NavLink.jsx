function isExternalLink(to) {
  return /^(?:https?:|mailto:|tel:|\/\/)/i.test(to)
}

export function NavLink({ to, onNavigate, onNavigateComplete, children, ...props }) {
  const handleClick = (event) => {
    if (props.target === '_blank' || isExternalLink(to)) return
    event.preventDefault()
    window.history.pushState({}, '', to)
    if (onNavigate) onNavigate(to)
    if (onNavigateComplete) onNavigateComplete()
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

export default NavLink
