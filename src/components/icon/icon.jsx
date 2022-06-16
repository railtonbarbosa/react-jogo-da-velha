function Icon ({icoName, size, link}) {
  return (
    <a href={link} target="blank">
      <img src={`/icons/${icoName}.svg`}width={size} />
    </a>
  )
}

Icon.defaultprops = {
  size:"30px"
}

export default Icon