
function displayCharacter(characterName, gender, race, age, size, hasMana, hasSpiritMagicAffinity, combatStyle, magicAffinityType) {
    console.log("Personagem Criado:")
    console.log(`Nome:${characterName}`)
    console.log(`Genero: ${gender}`)
    console.log(`Raca: ${race}`)
    console.log(`Idade: ${age}`)
    console.log(`Tamanho: ${size}`)
    console.log(`Tem Mana: ${hasMana ? "Sim" : "Nao"}`)
    console.log(`Afinidade com Magia de Espirito: ${hasSpiritMagicAffinity ? "Sim" : "Nao"}`)
    console.log(`Estilo de Combate Principal: ${combatStyle}`)
    console.log(`Afinidade com Magia: ${magicAffinityType}`)
}
createCharacter()
function createCharacter() {
    const characterName = prompt("DIgite o nome do personagem:")
    const gender = prompt("Digite o genero do personagem (Masculino/Feminino/Outro):")
    const race = prompt("Digite a raça do personagem (Exemplo: Humano, Elfo, Anao, etc.):")
    const age = parseInt(prompt("Digite a idade do personagem:"))
    const size = prompt("Digite o tamanho do personagem (Pequeno/Medio/Grande):")
    const hasMana = prompt("O personagem tem mana? (Sim/Nao):").toLowerCase() === 'sim'
    const hasSpiritMagicAffinity = prompt("O personagem tem afinidade com magia de espirito? (Sim/Não):").toLowerCase() === 'sim'
    const combatStyle = prompt("Qual e o estilo de combate principal? (Exemplo: Corpo a Corpo, Arqueiro, Magia, etc.):")
    const magicAffinityType = prompt("Qual tipo de magia o personagem tem mais afinidade? (Exemplo: Fogo, agua, Terra, etc.):")

    displayCharacter(characterName, gender, race, age, size, hasMana, hasSpiritMagicAffinity, combatStyle, magicAffinityType)
}