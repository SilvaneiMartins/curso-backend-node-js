export function getFilePath(file) {
    const filePath = file.path;
    const fileSplit = filePath.split("\\"); // No Windows
    //const fileSplit = filePath.split("/"); // No Linux ou Mac

    return `${fileSplit[1]}/${fileSplit[2]}`;
}
