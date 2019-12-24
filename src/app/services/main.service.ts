import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Data } from '../shared/interfaces/interfaces';

@Injectable({ providedIn: 'root' })
export class MainService {
    constructor( private http: HttpClient ) {}

    elementData: Data[] = [];
    parentFolderId: number | string = null;
    folderQueue: Array<number | string> = [];

    /**
     * Загружает данные.
     */
    load() {
        this.http.get<any>('http://80.93.49.48:8592/file').subscribe(response => {
            this.elementData = response.data;
            this.folderQueue = [];
        }, error => {
            alert(error.message);
        });
    }

    /**
     * Добавляет новый файл.
     * @param {string} name - Имя файла.
     * @param {any} file - Передаваемый файл.
     */
    addFile(name: string, file: any) {
        const fileData = {
            fileTypeEnum: 'FILE',
            name,
            parentFolderId: this.parentFolderId,
        };

        const formData = new FormData();
        formData.append('requestObj', JSON.stringify(fileData));
        formData.append('multipartFile', file);

        this.http.post<Data>('http://80.93.49.48:8592/file', formData).subscribe(response => {
            this.elementData.push(response);
        }, error => {
            alert(error.message);
        });
    }

    /**
     * Добавляет новую папку.
     * @param {string} name - Имя папки.
     */
    addFolder(name: string) {
        const folderData = {
            fileTypeEnum: 'FOLDER',
            name: name,
            parentFolderId: this.parentFolderId,
        };

        const formData = new FormData();
        formData.append('requestObj', JSON.stringify(folderData));

        this.http.post<Data>('http://80.93.49.48:8592/file', formData).subscribe(response => {
            this.elementData.push(response);
        }, error => {
            alert(error.message);
        });
    }

    /**
     * Изменяет имя элемента.
     * @param {number} id - ID элемента.
     * @param {string} newName - Новое имя элемента.
     */
    renameElement(id: number, newName: string) {
        this.http.put<Data>(`http://80.93.49.48:8592/file/${id}`, { name: newName })
            .subscribe(response => {
                const index = this.findIndex(response.id);

                this.elementData[index] = response;
            }, error => {
                alert(error.message);
            });
    }

    /**
     * Удаляет элемент.
     * @param {number} id - ID элемента.
     */
    removeElement(id: number) {
        this.http.delete<Data>(`http://80.93.49.48:8592/file/${id}`).subscribe(response => {
            const index = this.findIndex(response.id);

            this.elementData.splice(index, 1);
        }, error => {
            alert(error.message);
        });
    }

    /**
     * Переходит в папку.
     * @param {number} id - ID папки.
     */
    goToFolder(id?: number) {
        this.http.get<any>(`http://80.93.49.48:8592/file?name&parentFolderId=${id}`)
            .subscribe(response => {
                this.elementData = response.data;
                
                if (id === this.folderQueue[this.folderQueue.length - 2]) {
                    this.folderQueue.pop();
                } else {
                    this.folderQueue.push(id);
                }

                this.parentFolderId = id;
            }, error => {
                alert(error.message);
            });
    }

    /**
     * Находит индекс элемента.
     * @param {number} id - ID элемента.
     * @return {number} Индекс элемента.
     */
    private findIndex(id: number): number {
        return this.elementData.findIndex((element) => element.id === id);
    }
}
