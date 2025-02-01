export const boolFieldTemplate = (field: boolean) => {
    return <i className={field ? "pi pi-check " : "pi pi-times-circle"}
              style={field ? {color: "green"} : {color: "red"}}></i>
}
