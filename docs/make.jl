using Documenter

makedocs(
    sitename = "AppliGate",
    format = Documenter.HTML(),
    pages = [
        "AppliGate" => "index.md",
        "Blog" => "blog.md",
        "Projects" => "projects.md",
        "Employees" => "employees.md"
    ]
)
