using Documenter

makedocs(
    sitename = "AppliGate",
    format = Documenter.HTML(),
    pages = [
        "AppliGate" => "index.md",
        "Employees" => "employees.md"
    ]
)
