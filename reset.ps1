$mysql = "C:\xampp\mysql\bin\mysql.exe"

$arquivosSql = @(
  "database.sql",
  "tables.sql",
  "seeds.sql"
)

$caminho = Join-Path $PSScriptRoot "api\database"

foreach ($nomeArquivo in $arquivosSql) {
  $arquivoSql = Join-Path $caminho $nomeArquivo

  if (-not (Test-Path $arquivoSql)) {
    throw "Arquivo não encontrado: $nomeArquivo"
  }

  Write-Host "Executando: $nomeArquivo"

  Get-Content $arquivoSql -Raw -Encoding UTF8 | & $mysql -u root

  if ($LASTEXITCODE -ne 0) {
    throw "Ocorreu um erro ao executar: $nomeArquivo"
  }
}

Write-Host "Todos os arquivos SQL foram executados."