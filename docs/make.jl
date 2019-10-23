using Documenter

makedocs(
    sitename = "AppliGate",
    format = Documenter.HTML(),
    pages = [
        "AppliGate" => "index.md",
        "Blog" => "blog.md",
        "Employees" => "employees.md"
    ]
)
