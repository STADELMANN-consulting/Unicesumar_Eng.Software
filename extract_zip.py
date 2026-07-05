#!/usr/bin/env python3
"""
Script para extrair o arquivo portfolio-claudio-stadelmann.zip no root do repositório
"""
import zipfile
import os

def extract_zip():
    zip_path = "portfolio-claudio-stadelmann.zip"
    extract_path = "./"
    
    if not os.path.exists(zip_path):
        print(f"Erro: {zip_path} não encontrado!")
        return False
    
    try:
        with zipfile.ZipFile(zip_path, 'r') as zip_ref:
            zip_ref.extractall(extract_path)
        print(f"✓ Arquivo extraído com sucesso em: {extract_path}")
        
        # Listar arquivos extraídos
        for root, dirs, files in os.walk(extract_path):
            for file in files:
                if file != zip_path:
                    rel_path = os.path.join(root, file)
                    print(f"  - {rel_path}")
        return True
    except Exception as e:
        print(f"✗ Erro ao extrair: {e}")
        return False

if __name__ == "__main__":
    extract_zip()
