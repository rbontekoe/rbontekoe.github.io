using Documenter

makedocs(
    sitename = "AppliGate",
    format = Documenter.HTML(),
    pages = [
        "AppliGate" => "index.md"
        "Past Expertise" => "cv.md"
    ]
)
