export function reload(arr, component, place) { // high ordered functions
    place.innerHTML = ""

    for(let item of arr) {
        const elem = component(item)

        place.append(elem)
    }
}